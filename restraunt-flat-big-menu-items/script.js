const restaurantImages = document.querySelectorAll(".restaurant");


let i = 0; 

function changeImage() {

    restaurantImages.forEach(image => {
        image.style.opacity = 0;
    });


    i++;
    if (i >= restaurantImages.length) {
        i = 0;
    }
    restaurantImages[i].style.opacity = 1;
    
}

setInterval(changeImage, 1800);