let menuMobile = document.getElementsByClassName('mobileMenu')

function menuMobileHide() {
    menuMobile[0].style.left = '100%'
    menuMobile[0].style.opacity = '0'
}

function menuMobileShow() {
    menuMobile[0].style.left = '0%'
    menuMobile[0].style.opacity = '1'
}