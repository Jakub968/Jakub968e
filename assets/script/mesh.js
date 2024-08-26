let mesh = document.getElementsByClassName('mesh')
if (document.body.offsetWidth > 1025) {
    mesh[4].addEventListener('mouseover', ()=>{
        mesh[0].style.left = '5%'
        mesh[1].style.left = '47%'
        mesh[2].style.left = '15%'
        mesh[3].style.left = '38%'
    })
    
    mesh[4].addEventListener('mouseout', ()=>{
        mesh[0].style.left = '19%'
        mesh[1].style.left = '35%'
        mesh[2].style.left = '23%'
        mesh[3].style.left = '31%'
    })
}


