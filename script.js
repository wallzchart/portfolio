const gallery = document.querySelector('.zine-gallery');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

nextButton.addEventListener('click', () => {
    if (index < document.querySelectorAll('.zine-page').length - 1) {
        index++;
        updateGallery();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateGallery();
    }
});

function updateGallery() {
    const offset = -index * 100; 
    gallery.style.transform = `translateX(${offset}%)`;
}
