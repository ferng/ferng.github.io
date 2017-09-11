window.addEventListener('scroll', function() {
    var navElement = document.querySelector('.navbar');
    var sectionElement = document.getElementById('section');
    var navPos = navElement.getBoundingClientRect();
    var sectionPos = sectionElement.getBoundingClientRect();
    if (navPos.top < 1) {
        navElement.classList.add('fixed-header');
    } 
    if (navPos.top == 0 && sectionPos.top > 1) {
        navElement.classList.remove('fixed-header');
    }
});


window.onload = function() {
    var links = document.querySelectorAll('.navbar-link');
    links.forEach(function(link) {
        link.addEventListener('click', redrawSections);
    })
    hideSections();
    displaySection('introSection');
}


function redrawSections() {
    hideSections();
    var navElement = document.querySelector('.navbar');
    
    navElement.classList.add('fixed-header');
    displaySection(this.id + 'Section');
}


function hideSections() {
    var sections = document.querySelectorAll('.docs-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    })
}


function displaySection(section) {
    var displaySection = document.getElementById(section);
    displaySection.style.display = 'block';
}