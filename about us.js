// Smooth scroll function (if you'd like smooth scroll effect)
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
