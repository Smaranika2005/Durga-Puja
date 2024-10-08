const pandals = document.querySelectorAll('.pandal-list li');

pandals.forEach((pandal) => {
    pandal.addEventListener('click', () => {
        // Remove clicked class from others
        pandals.forEach((p) => p.classList.remove('clicked'));
        
        // Add clicked class to the selected item
        pandal.classList.add('clicked');
        
        // Add dynamic flipping effect on click
        pandal.style.transition = "transform 0.8s ease-in-out";
        pandal.style.transform = "rotateY(720deg)";
        
        // Reset after animation
        setTimeout(() => {
            pandal.style.transform = "rotateY(0deg)";
        }, 800);
    });
});
