const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error
showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success
showSucess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//vadidation email
checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSucess(email);
    }else[
        showError(email, 'Email is not valid')
    ]
}

// check required function
checkRequired = (inputArr) =>{
    inputArr.forEach( (input) => {
        console.log(input.id);
        if(input.value.trim() === ''){
            showError(input, `${filedName(input)} is Required`);

        }else{
            showSucess(input);
        }
    });

}

// get field name
filedName = (input) =>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input length
checkLength = (input, min, max) =>{
    if(input.value.length < min){
        showError(input, `${filedName(input)} mus be atleast ${min} character`);
    }else if(input.value.length > max){
        showError(input, `${filedName(input)} mus be atleast ${max} character`);
    }else{
        showSucess(input);
    }
}

// check Password Match

chackPasswordMatch = (pass1, pass2) => {
    if(pass1.value !== pass2.value){
        showError(pass2, 'Password do not match');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();//ป้องกัน รีเฟส browser
    // if (username.value === '') {
    //     showError(username, "Username is required")
    // } else {
    //     showSucess(username);
    // }

    // if (email.value === '') {
    //     showError(email, "email is required")
    // }else if(!checkEmail(email.value)){
    //     showError(email, "email is valid")
    // }else {
    //     showSucess(email);
    // }

    // if (password.value === '') {
    //     showError(password, "password is required")
    // } else {
    //     showSucess(password);
    // }

    // if (password2.value === '') {
    //     showError(password2, "password is required")
    // } else {
    //     showSucess(password2);
    // }

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    chackPasswordMatch(password, password2);
})