document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', (event) => event.preventDefault());

    var isValid = true;
    let messages = [];
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if(username.length < 3){
        isValid = false;
        messages.push('User name too short');
    } 
    
    if(!email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push('Email is not valid');
    } 
    
    if(password.length < 8){
        isValid = false;
        messages.push('Password too short')
    }

    feedbackDiv.style.display = "block";
    if(isValid){
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"
    } else{
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545"
    }
})