const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }

    imgs[n].style.display = 'block';
}

changeSlide();

// Previous Button
prev_btn.addEventListener('click', () => {

    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }

    changeSlide();
});

// Next Button
next_btn.addEventListener('click', nextSlide);

// Function for next image
function nextSlide() {

    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }

    changeSlide();
}

// Auto Slide every 3 seconds
setInterval(nextSlide, 3000);


const scrollContainer = document.querySelectorAll('.products');

scrollContainer.forEach(item => {
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
});


const sliders = document.querySelectorAll(".products-slider");

sliders.forEach((slider) => {

    const products = slider.querySelector(".products");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
        products.scrollBy({
            left: 600,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        products.scrollBy({
            left: -600,
            behavior: "smooth"
        });
    });

});


