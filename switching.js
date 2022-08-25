let watchIMG = document.getElementsByClassName('watches')
let coffeeIMG = document.getElementsByClassName('coffee')
let pizzaIMG = document.getElementsByClassName('pizza')

let watchButton = document.getElementsByClassName('watchButton')
let coffeButton = document.getElementsByClassName('coffeButton')
let pizzaButton = document.getElementsByClassName('pizzaButton')


function watch(){
    watchIMG[0].style.left = '50%'
    coffeeIMG[0].style.left = '150%'
    pizzaIMG[0].style.left = '250%'

    watchButton[0].style.background = 'white'
    coffeButton[0].style.background = 'rgba(255, 255, 255, 0.545)'
    pizzaButton[0].style.background = 'rgba(255, 255, 255, 0.545)'

    console.log('kokos');
}

function coffee(){
    watchIMG[0].style.left = '-50%'
    coffeeIMG[0].style.left = '50%'
    pizzaIMG[0].style.left = '150%'

    watchButton[0].style.background = 'rgba(255, 255, 255, 0.545)'
    coffeButton[0].style.background = 'white'
    pizzaButton[0].style.background = 'rgba(255, 255, 255, 0.545)'
}

function pizza(){
    watchIMG[0].style.left = '-150%'
    coffeeIMG[0].style.left = '-50%'
    pizzaIMG[0].style.left = '50%'

    watchButton[0].style.background = 'rgba(255, 255, 255, 0.545)'
    coffeButton[0].style.background = 'rgba(255, 255, 255, 0.545)'
    pizzaButton[0].style.background = 'white'
}

let i = 1
function hamburger() {
    let menu = document.getElementById('menuUl')
    
    if (i === 1) {
        menu.style.transform = 'translateX(100px)'
        console.log('joj');

        return i = 2
    }else {
        menu.style.transform = 'translateX(230px)'

        return i = 1
    }



}




