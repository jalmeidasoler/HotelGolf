document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('galeria-imagen');
    const prevButton = document.getElementById('izq-boton2');
    const nextButton = document.getElementById('der-boton2');

    const images = ['./img/image1.jpg', './img/image2.jpg', './img/image3.jpg', './img/image4.jpg'];
    let currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        image.src = images[currentIndex];
    }

    function showNextImage() {
        showImage(currentIndex + 1);
    }

    function showPrevImage() {
        showImage(currentIndex - 1);
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
});