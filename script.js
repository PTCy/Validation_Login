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
showSucess = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';   
}

//vadidation email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSucess(input);
    } else {
      showError(input, 'Enail is not valid');
    }
  }

form.addEventListener('submit', (e)=>{
    e.preventDefault();//ป้องกัน รีเฟส browser
    if(username.value === ''){
        showError(username, "Username is required")
    }else{
        showSucess(username);
    }

    if(email.value === ''){
        showError(email, "email is required")
    }else{
        showSucess(email);
    }

    if(password.value === ''){
        showError(password, "password is required")
    }else{
        showSucess(password);
    }

    if(password2.value === ''){
        showError(password2, "password is required")
    }else{
        showSucess(password2);
    }
})