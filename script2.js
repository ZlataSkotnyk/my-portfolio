const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const submitSuccess = document.getElementById('submitSuccess');

function validateForm(event) {
    event.preventDefault(); 
    
    let isValid = true;
    
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    submitSuccess.textContent = '';
    
    nameInput.style.borderBottom = '2px solid #fac2a1';
    emailInput.style.borderBottom = '2px solid #fac2a1';
    messageInput.style.borderBottom = '2px solid #fac2a1';
    
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        nameInput.style.borderBottom = '2px solid rgb(245, 157, 157)';
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {
        nameError.textContent = 'Name should contain only letters and spaces';
        nameInput.style.borderBottom = '2px solid rgb(245, 157, 157)';
        isValid = false;
    }
    
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderBottom = '2px solid rgb(245, 157, 157)';
        isValid = false;
    }
    
    const messageValue = messageInput.value.trim();
    if (messageValue.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long';
        messageInput.style.borderBottom = '2px solid rgb(245, 157, 157)';
        isValid = false;
    }
    
    if (isValid) {
        submitSuccess.textContent = 'Form submitted successfully!';
        submitSuccess.style.display = 'block';
        submitSuccess.style.color = 'green';
        
        form.reset();
    }
    
    return false; 
}