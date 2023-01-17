let contactButton = document.getElementsByClassName('main-button')
let servicesLink = document.getElementsByClassName('servicesLink')

contactButton[0].addEventListener('mouseover', ()=>{
    contactButton[0].style.background = 'white'
    contactButton[0].firstChild.firstChild.style.color = 'purple'
})

contactButton[0].addEventListener('mouseout', ()=>{
    contactButton[0].style.background = 'transparent'
    contactButton[0].firstChild.firstChild.style.color = 'white'
})


for (let i = 0; i < 6; i++) {

    servicesLink[i].addEventListener('mouseover', ()=>{
        servicesLink[i].style.background = '#16ffb5'
        servicesLink[i].firstChild.firstChild.style.color = 'purple'
    })
    
    servicesLink[i].addEventListener('mouseout', ()=>{
        servicesLink[i].style.background = 'transparent'
        servicesLink[i].firstChild.firstChild.style.color = '#16ffb5'
    })  
}