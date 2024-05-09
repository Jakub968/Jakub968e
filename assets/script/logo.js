let logo = document.getElementsByClassName('logo')


function animation() {
    logo[0].style.width = '60%'
    setTimeout(fillUp, 100)
    function fillUp() {
        logo[0].style.width = '70%'    
    }
}