let line1 = document.getElementsByClassName('lineOne')
let servicesH1 = document.getElementsByClassName('servicesH1')

let box = document.getElementsByClassName('box')

let line2 = document.getElementsByClassName('line2')
let aboutH1 = document.getElementsByClassName('aboutH1')
let boxAbout = document.getElementsByClassName('box-about2')

let technology = document.getElementById('technology')
let technologyCover = document.getElementsByClassName('cover')

let boxPhotogalery = document.getElementsByClassName('box-photogalery')





if (document.body.offsetWidth > 1024 && document.body.offsetWidth < 1280) {
    window.addEventListener('scroll', () =>{

        console.log(window.scrollY);
    
        if (window.scrollY > 420) {
            line2[0].style.width = '70%'
            aboutH1[0].style.transform = 'translateX(0px)'
            aboutH1[0].style.opacity = '1'
        }
        else{
            line2[0].style.width = '0%'
            aboutH1[0].style.transform = 'translateX(-100px)'
            aboutH1[0].style.opacity = '0'
        }
    
    
    
    
        if (window.scrollY > 590) {
            boxAbout[0].children[0].style.transform = 'translateY(0px)'
            boxAbout[0].children[0].style.opacity = '1'
    
            boxAbout[0].children[1].style.transform = 'translateY(0px)'
            boxAbout[0].children[1].style.opacity = '1'
        }
        else{
            boxAbout[0].children[0].style.transform = 'translateY(-100px)'
            boxAbout[0].children[0].style.opacity = '0'
    
            boxAbout[0].children[1].style.transform = 'translateY(100px)'
            boxAbout[0].children[1].style.opacity = '0'
        }
    
    
    
        if (window.scrollY > 940) {
          technology.style.opacity = '1' 
        }
        else{
            technology.style.opacity = '0' 
        }
    
    
    
        if (window.scrollY > 1000) {
            technologyCover[0].children[0].style.opacity = '1'
            technologyCover[0].children[1].style.opacity = '1'
    
            technologyCover[0].children[0].style.transform = 'translateX(0px)'
            technologyCover[0].children[1].style.transform = 'translateX(0px)'
        }
    
        else {
            technologyCover[0].children[0].style.opacity = '0'
            technologyCover[0].children[1].style.opacity = '0'
    
            technologyCover[0].children[0].style.transform = 'translateX(100px)'
            technologyCover[0].children[1].style.transform = 'translateX(-100px)'
        }
    
    
        if (window.scrollY > 1280) {
            boxPhotogalery[0].children[0].style.opacity = '1'
            boxPhotogalery[0].children[0].style.transform = 'translateX(0px)'
            boxPhotogalery[0].children[1].style.width = '60%'
        }
        else{
            boxPhotogalery[0].children[0].style.opacity = '0'
            boxPhotogalery[0].children[0].style.transform = 'translateX(-100px)'
            boxPhotogalery[0].children[1].style.width = '0%' 
        }
    })
}









if (document.body.offsetWidth > 1280) {
    window.addEventListener('scroll', () =>{
        if (window.scrollY > 0) {
            line1[0].style.width = '70%'
    
            servicesH1[0].style.opacity = '1'
            servicesH1[0].style.transform = 'translateX(0px)'
        } 
        else{
            line1[0].style.width = '0%'
    
            servicesH1[0].style.opacity = '0'
            servicesH1[0].style.transform = 'translateX(-100px)'
        }
        console.log(window.scrollY);
    
        if (window.scrollY > 270) {
           
    
            box[0].children[0].style.opacity = '1'
            box[0].children[0].style.transform = 'translateY(0px)'
            box[0].children[1].style.opacity = '1'
            box[0].children[1].style.transform = 'translateY(0px)'
    
            box[1].children[0].style.opacity = '1'
            box[1].children[0].style.transform = 'translateY(0px)'
            box[1].children[1].style.opacity = '1'
            box[1].children[1].style.transform = 'translateY(0px)'
    
            box[2].children[0].style.opacity = '1'
            box[2].children[0].style.transform = 'translateY(0px)'
            box[2].children[1].style.opacity = '1'
            box[2].children[1].style.transform = 'translateY(0px)'
        }
        else{
    
            box[0].children[0].style.opacity = '0'
            box[0].children[0].style.transform = 'translateY(-100px)'
            box[0].children[1].style.opacity = '0'
            box[0].children[1].style.transform = 'translateY(100px)'
    
            box[1].children[0].style.opacity = '0'
            box[1].children[0].style.transform = 'translateY(-100px)'
            box[1].children[1].style.opacity = '0'
            box[1].children[1].style.transform = 'translateY(100px)'
    
            box[2].children[0].style.opacity = '0'
            box[2].children[0].style.transform = 'translateY(-100px)'
            box[2].children[1].style.opacity = '0'
            box[2].children[1].style.transform = 'translateY(100px)'
    
        }
    
        if (window.scrollY > (680)) {
            line2[0].style.width = '70%'
            aboutH1[0].style.transform = 'translateX(0px)'
            aboutH1[0].style.opacity = '1'
        }
        else{
            line2[0].style.width = '0%'
            aboutH1[0].style.transform = 'translateX(-100px)'
            aboutH1[0].style.opacity = '0'
        }
    
    
    
    
        if (window.scrollY > 910) {
            boxAbout[0].children[0].style.transform = 'translateY(0px)'
            boxAbout[0].children[0].style.opacity = '1'
    
            boxAbout[0].children[1].style.transform = 'translateY(0px)'
            boxAbout[0].children[1].style.opacity = '1'
        }
        else{
            boxAbout[0].children[0].style.transform = 'translateY(-100px)'
            boxAbout[0].children[0].style.opacity = '0'
    
            boxAbout[0].children[1].style.transform = 'translateY(100px)'
            boxAbout[0].children[1].style.opacity = '0'
        }
    
    
    
        if (window.scrollY > 1200) {
          technology.style.opacity = '1' 
        }
        else{
            technology.style.opacity = '0' 
        }
    
    
    
        if (window.scrollY > 1250) {
            technologyCover[0].children[0].style.opacity = '1'
            technologyCover[0].children[1].style.opacity = '1'
    
            technologyCover[0].children[0].style.transform = 'translateX(0px)'
            technologyCover[0].children[1].style.transform = 'translateX(0px)'
        }
    
        else {
            technologyCover[0].children[0].style.opacity = '0'
            technologyCover[0].children[1].style.opacity = '0'
    
            technologyCover[0].children[0].style.transform = 'translateX(100px)'
            technologyCover[0].children[1].style.transform = 'translateX(-100px)'
        }
    
    
        if (window.scrollY > 1630) {
            boxPhotogalery[0].children[0].style.opacity = '1'
            boxPhotogalery[0].children[0].style.transform = 'translateX(0px)'
            boxPhotogalery[0].children[1].style.width = '60%'
        }
        else{
            boxPhotogalery[0].children[0].style.opacity = '0'
            boxPhotogalery[0].children[0].style.transform = 'translateX(-100px)'
            boxPhotogalery[0].children[1].style.width = '0%' 
        }
    })
}