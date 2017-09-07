
window.addEventListener('scroll', function() {
    var navElement = document.querySelector('.navbar');
    var docTop = document.querySelector('body').scrollTop;
    if (docTop > 660) {
        navElement.classList.add('fixed-header');
    } else {
        navElement.classList.remove('fixed-header');
    }
});