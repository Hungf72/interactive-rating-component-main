document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-button');
    const submitButton = document.querySelector('.submit-button');

    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            // Set the selected rating
            selectedRating = button.textContent;
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            // Hide the rating card
            document.querySelector('.card').style.display = 'none';
            
            // Show the thank you message
            const thankYouMessage = document.querySelector('.thank-you-message');
            thankYouMessage.style.display = 'block';
            
            // Update the selected rating in the thank you message
            thankYouMessage.querySelector('.selected-rating').textContent = selectedRating;
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});
