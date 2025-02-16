const form = document.forms.registrationForm;
const btn = document.getElementById('submitForm');
const userName = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.gender;
const select = form.elements.jobSelect;
const password = form.elements.password;
const agree = form.elements.agree;
let userNameError = document.getElementById('userNameError');
let emailError = document.getElementById('emailError');
let ageError = document.getElementById('ageError');
let genderSelectError = document.getElementById('genderSelectError');
let jobSelectError = document.getElementById('jobSelectError');
let passwordError = document.getElementById('passwordError');
let agreeError = document.getElementById('agreeError ');


form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let hasError = false;

    userNameError.style.display ='none';
    emailError.style.display = 'none';
    ageError.style.display = 'none';
    genderSelectError.style.display = 'none';
    jobSelectError.style.diplay = 'none';
    passwordError.style.display ='none';
    agreeError.style.display = 'none';

    if(userName.value=''){
        userNameError.textContent =' Необходимо заполнить поле';
        userNameError.style.display ='block';
        hasError = true;
    }
    if(validateEmail(email.value) === false){
        emailError.textContent=' Необходимо заполнить поле';
        emailError.style.display = 'block';
        hasError = true;
    }
    if(age.value===''){
        ageError.textContent=' Необходимо заполнить поле';
        ageError.style.display = 'block';
        hasError = true;
    }
    if(gender.checked === false){
        genderSelectError.textContent=' Необходимо выбрать один из вариантов';
        genderSelectError.style.display = 'block';
        hasError = true;
    }
    if(select.checked === false){
        jobSelectError.textContent=' Необходимо выбрать один из вариантов';
        jobSelectError.style.diplay = 'block';
        hasError = true;
    }
    if(password.value===''){
        passwordError.textContent=' Необходимо заполнить поле';
        passwordError.style.display ='block';
        hasError = true;
    }
    if(agree.checked=== false){
        agreeError.textContent='  Необходимо Ваше согласие';
        agreeError.style.display = 'block';
        hasError = true;
    }
    if (hasError === false)
   btn.disabled === false;
    console.log (userName.value, email.value, age.value, gender.value, select.value);
    
    form.reset()
})

function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}
