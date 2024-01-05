const dogImages = document.querySelectorAll(".dog");
const catImages = document.querySelectorAll(".cat");

let i = 0; // Initialize i to 0

function changeImage() {
    dogImages.forEach(image => {
        image.style.opacity = 0;
    });

    catImages.forEach(image => {
        image.style.opacity = 0;
    });

    i++;
    if (i >= dogImages.length) {
        i = 0;
    }
    dogImages[i].style.opacity = 1;
    catImages[i].style.opacity = 1;
}

setInterval(changeImage, 1800);