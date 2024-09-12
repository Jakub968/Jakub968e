const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})




const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenLeft = document.querySelectorAll('.hidden-left');
hiddenLeft.forEach((el) => observer.observe(el));

const opacityVisibility = document.querySelectorAll('.bottom-animation');
opacityVisibility.forEach((el) => observer.observe(el));