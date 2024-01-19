let logo = document.getElementsByClassName('path1')



function animation() {
    logo[0].style.strokeDashoffset = '0'
    logo[1].style.strokeDashoffset = '0'
    logo[2].style.strokeDashoffset = '0'
    logo[3].style.strokeDashoffset = '0'
    logo[4].style.strokeDashoffset = '0'
    logo[5].style.strokeDashoffset = '0'
    logo[6].style.strokeDashoffset = '0'
    setTimeout(fillUp, 400)

    function fillUp() {
        logo[0].style.fill = 'white'
        logo[1].style.fill = 'white'
        logo[2].style.fill = 'white'
        logo[3].style.fill = 'white'
        logo[4].style.fill = 'white'
        logo[5].style.fill = 'white'
        logo[6].style.fill = 'white'

        setTimeout(unstroke, 400)

        function unstroke() {
            logo[0].style.strokeDashoffset = '2400'
            logo[1].style.strokeDashoffset = '2400'
            logo[2].style.strokeDashoffset = '2400'
            logo[3].style.strokeDashoffset = '2400'
            logo[4].style.strokeDashoffset = '2400'
            logo[5].style.strokeDashoffset = '2400'
            logo[6].style.strokeDashoffset = '2400'
        }
    }

    

}