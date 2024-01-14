'use strict';
const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message:'',
};
const formFeedback = document.querySelector('.js-feedback-form');
formFeedback.addEventListener('input', onFormInput);
formFeedback.addEventListener('submit', onFormSubmit);
fillInFormsInputs()
function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   }
function onFormSubmit(evt) {
    evt.preventDefault();
    const userFeedback = evt.currentTarget.elements;
    if (userFeedback.email.value.trim() !== '' && userFeedback.message.value.trim() !== '') {
        evt.currentTarget.reset();
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        formData = {
    email: '',
    message:'',
};
        } else { return alert('All form fields must be filled in') }
   
}
function fillInFormsInputs() {
    const localStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (localStorageData) {
        const { email, message } = localStorageData;

        formFeedback.elements.email.value = email;
        formFeedback.elements.message.value = message;

        formData.email = email;
        formData.message = message;
    } 
}