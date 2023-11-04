
var elemento = document.getElementsByClassName('navbar');

window.addEventListener('scroll', function() {

    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > 100) {

        elemento.style.display = 'flex';
    } else {

        elemento.style.display = 'none';
    }
});


        // nao funciona