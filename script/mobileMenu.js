let mobileMenu = document.getElementsByClassName('mobileMenu')
let hamburger = document.getElementsByClassName('hamburger')
let X = document.getElementsByClassName('X')

hamburger[0].addEventListener('click', () => {
    mobileMenu[0].style.transform = 'translateX(0%)'
    mobileMenu[0].style.opacity = '1'
    hamburger[0].style.opacity = '0'
})

X[0].addEventListener('click', () => {
    mobileMenu[0].style.transform = 'translateX(100%)'
    mobileMenu[0].style.opacity = '0'
    hamburger[0].style.opacity = '1'
})