
// Mobile navbar
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
}); 


// Carrousel
const carousel = document.getElementById("carousel");

carousel.addEventListener("wheel", (event) => {
    event.preventDefault();
    carousel.scrollLeft += event.deltaY; // Défilement horizontal avec la molette
});