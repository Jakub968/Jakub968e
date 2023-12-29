let header = document.getElementById('header')
let lists = document.getElementsByClassName('lists')



window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
        header.style.background = 'transparent'
        header.style.transition =  ' 0.2s'
        // header.style.boxShadow = ' 10px 0 10px rgba(0, 0, 0, 0.795)'
    } 
   
    else {
        header.style.background = 'white'   
        header.style.boxShadow = ' none' 
    }
})