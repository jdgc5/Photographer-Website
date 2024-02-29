document.addEventListener("DOMContentLoaded", function() {
    const menuToggleContainer = document.querySelector('.menu-toggle');
    const navLi = document.querySelector('.navli');

    menuToggleContainer.addEventListener('click', function() {
        navLi.classList.toggle('active');
    });
});


function ocultarToggle() {
    if ($(window).width() >= 980) {
        $('.menu-toggle').css('display', 'none'); 
    } else {
        $('.menu-toggle').css('display', 'flex'); 
    }
}

$(window).resize(function() {
    ocultarToggle();
});