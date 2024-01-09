const form = document.querySelector('.subscriptionForm');
const emailInput = document.querySelector('.email');
const invalidEmailLabel = document.querySelector('.invalidEmail');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput.value);

    if (!isValidEmail) {
        // Handle invalid email case
        invalidEmailLabel.style.display = 'block';
        emailInput.style.outline = '1px solid var(--Tomato)';
        emailInput.style.color = 'hsl(4, 100%, 67%)';
        
        return; // Stop further execution if email is invalid
    }

    // Redirect to confirmation page
    window.location.href = `confirmation.html?email=${encodeURIComponent(emailInput.value)}`;
});

// Prevent default validation and apply custom styles
form.setAttribute('novalidate', true);