const search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

const cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
}

const navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)};

let elToShow = document.querySelectorAll('.play-on-scroll');

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start');
        } else {
            item.classList.remove('start');
        }
    })

    scroll(loop);   
}

loop();