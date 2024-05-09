let paper1 = document.getElementsByClassName('paper1')
let paper2 = document.getElementsByClassName('paper2')
let paper3 = document.getElementsByClassName('paper3')

paper3[0].addEventListener('mouseover', ()=>{
    paper1[0].style.rotate = '20deg'
    paper1[0].style.left = '60%'
    paper2[0].style.rotate = '5deg'
    paper2[0].style.left = '40%'
    paper3[0].style.rotate = '-11deg'
    paper3[0].style.left = '20%'
})
paper3[0].addEventListener('mouseout', ()=>{
    paper1[0].style.rotate = '10deg'
    paper1[0].style.left = '30%'
    paper2[0].style.rotate = '2deg'
    paper2[0].style.left = '25%'
    paper3[0].style.rotate = '-10deg'
    paper3[0].style.left = '20%'
})