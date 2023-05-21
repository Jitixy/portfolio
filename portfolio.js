var typed = new Typed('#element', {
    strings: ['Web Developer', 'Web Designer', 'Trader', 'Learner'],
    typeSpeed: 50,
});


function scrollToSection() {
    var secondSection = document.querySelector('.secondsection');
    secondSection.scrollIntoView({
        behavior: 'smooth'
    });

    var scrollButton = document.getElementById('scrollButton');
    scrollButton.classList.add('scroll-up');
    scrollButton.textContent = 'Move Up';

    // Remove the event listener after scrolling down once
    scrollButton.removeEventListener('click', scrollToSection);
}

window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 0) {
        scrollButton.classList.add('scroll-up');
        scrollButton.textContent = 'Move Up';
        scrollButton.addEventListener('click', scrollToTop);
    } else {
        scrollButton.classList.remove('scroll-up');
        scrollButton.textContent = 'Scroll Down';
        scrollButton.removeEventListener('click', scrollToTop);
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}