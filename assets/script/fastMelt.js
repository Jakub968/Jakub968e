let meshFast = document.getElementsByClassName('meshFast')

if (document.body.offsetWidth > 1025) {
    meshFast[2].addEventListener('mouseover', ()=>{
        meshFast[0].style.left = '11%'
        meshFast[1].style.left = '35%'
    })
    
    meshFast[2].addEventListener('mouseout', ()=>{
        meshFast[0].style.left = '19%'
        meshFast[1].style.left = '27%'
    })
}

