function slider() {
    //slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = dotsWrap.querySelectorAll('.dot');
    showSlides(slideIndex);
    // n - номер слайда т.е вместо n будем писать slideIndex
    //ф-я показа слайдов
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(element => element.style.display = 'none');
        dots.forEach(element => element.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) if (event.target.matches('.dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    });
}

module.exports = slider;