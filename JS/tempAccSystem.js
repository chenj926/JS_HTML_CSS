document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const errorBox = document.querySelector('.error-box');
    const errorText = document.querySelector('.error-text');

    // Simple email validation to check for "@" symbol
    if (!email.includes('@')) {
        errorBox.classList.remove('hidden');
        errorText.textContent = 'Oops, the email is misspelled. You may have missed "@"';
    } else {
        errorBox.classList.add('hidden');
        // If valid, proceed with form submission or handle success logic
        alert('Signup successful!');
    }
});
