let refilMeshBox = document.getElementsByClassName('size-box')
let meshTube = document.getElementsByClassName('meshTube')
let refil = document.getElementsByClassName('refil')

for (let i = 0; i < 5; i++) {
    refilMeshBox[i].addEventListener('mouseover', ()=>{
        meshTube[i].style.opacity = '0'
        meshTube[i].style.transform = 'translateY(-100px)'
        refil[i].style.opacity = '1'
        refil[i].style.transform = 'translateY(100px)'
    })

    refilMeshBox[i].addEventListener('mouseout', ()=>{
        meshTube[i].style.opacity = '1'
        meshTube[i].style.transform = 'translateY(0px)'
        refil[i].style.opacity = '0'
        refil[i].style.transform = 'translateY(200px)'
    })
    
}