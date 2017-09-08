window.addEventListener('scroll', function() {
    var navElement = document.querySelector('.navbar');
    var introElement = document.getElementById('introSection');
    var navPos = navElement.getBoundingClientRect();
    var introPos = introElement.getBoundingClientRect();
    if (navPos.top < 1) {
        navElement.classList.add('fixed-header');
    } 
    if (navPos.top == 0 && introPos.top > 0) {
        navElement.classList.remove('fixed-header');
    }
});

window.onload = function() {
    var links = document.querySelectorAll('.navbar-link');
    links.forEach(function(link) {
        link.addEventListener('click', displaySection);
    })

}

function displaySection() {
    var sections = document.querySelectorAll('.docs-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    })

    var displaySection = document.getElementById(this.id + 'Section');
    displaySection.style.display = 'block';
}