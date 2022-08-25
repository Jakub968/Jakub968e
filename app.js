const app = Vue.createApp({
    data(){
        return{
            nextpage: 'hello'
        }
    }
})
let num = document.getElementsByClassName('num')
let lists = document.getElementsByClassName('lists')






function movingFoward() {
    let home = document.getElementById('home')
    let about = document.getElementById('about')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')
    console.log(home);
    if(home.offsetWidth > 480){
        if( home.style.left === '-130%'){

            home.style.left = '-195%'
            about.style.left = '-130%'
            projects.style.left = '-65%'
            contact.style.left = '0%'
    
            contact.style.opacity = '1'
            home.style.opacity = '0'
            about.style.opacity = '0'
            projects.style.opacity = '0'
             
            num[0].textContent = "04/"
    
            lists[3].style.borderBottom = '2px solid white'
            lists[1].style.borderBottom = 'none'
            lists[2].style.borderBottom = 'none'
            lists[0].style.borderBottom = 'none'
        }
    
        if( home.style.left === '-65%'){
            
            home.style.left = '-130%'
            about.style.left = '-65%'
            projects.style.left = '0%'
            contact.style.left = '65%'
    
            projects.style.opacity = '1'
            home.style.opacity = '0'
            about.style.opacity = '0'
            contact.style.opacity = '0'
    
            num[0].textContent = "03/"
    
            lists[2].style.borderBottom = '2px solid white'
            lists[1].style.borderBottom = 'none'
            lists[0].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left  === '0px'){
    
            home.style.left = '-65%'
            about.style.left = '0'
            projects.style.left = '65%'
            contact.style.left = '130%'
    
            about.style.opacity = '1'
            home.style.opacity = '0'
            projects.style.opacity = '0'
            contact.style.opacity = '0'
    
            num[0].textContent = "02/"
    
            lists[1].style.borderBottom = '2px solid white'
            lists[2].style.borderBottom = 'none'
            lists[0].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left  == 0){
    
            home.style.left = '-65%'
            about.style.left = '0'
            projects.style.left = '65%'
            contact.style.left = '130%'
    
            about.style.opacity = '1'
            home.style.opacity = '0'
            projects.style.opacity = '0'
            contact.style.opacity = '0'
    
            num[0].textContent = "02/"
    
            lists[1].style.borderBottom = '2px solid white'
            lists[2].style.borderBottom = 'none'
            lists[0].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    }else{
         // ################################################mobile

    if( home.style.left === '-200%'){

        home.style.left = '-300%'
        about.style.left = '-200%'
        projects.style.left = '-100%'
        contact.style.left = '0%'

        contact.style.opacity = '1'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '0'
         
        num[0].textContent = "04/"

        lists[3].style.borderBottom = '2px solid white'
        lists[1].style.borderBottom = 'none'
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
    }

    if( home.style.left === '-100%'){
        
        home.style.left = '-200%'
        about.style.left = '-100%'
        projects.style.left = '0%'
        contact.style.left = '100%'

        projects.style.opacity = '1'
        home.style.opacity = '0'
        about.style.opacity = '0'
        contact.style.opacity = '0'

        num[0].textContent = "03/"

        lists[2].style.borderBottom = '2px solid white'
        lists[1].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'
    }


    if( home.style.left  === '0px'){

        home.style.left = '-100%'
        about.style.left = '0'
        projects.style.left = '100%'
        contact.style.left = '200%'

        about.style.opacity = '1'
        home.style.opacity = '0'
        projects.style.opacity = '0'
        contact.style.opacity = '0'

        num[0].textContent = "02/"

        lists[1].style.borderBottom = '2px solid white'
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'
    }


    if( home.style.left  == 0){

        home.style.left = '-100%'
        about.style.left = '0'
        projects.style.left = '100%'
        contact.style.left = '2000%'

        about.style.opacity = '1'
        home.style.opacity = '0'
        projects.style.opacity = '0'
        contact.style.opacity = '0'

        num[0].textContent = "02/"

        lists[1].style.borderBottom = '2px solid white'
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'
    }
    }
  
    

   
    
}





function movingBack(){
    let home = document.getElementById('home')
    let about = document.getElementById('about')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')

    if(home.offsetWidth > 480){
        if( home.style.left === '-65%'){

            home.style.left = '0'
            about.style.left = '65%'
            projects.style.left = '130%'
            contact.style.left = '195%'
    
            contact.style.opacity = '0'
            home.style.opacity = '1'
            about.style.opacity = '0'
            projects.style.opacity = '0'
    
            num[0].textContent = "01/"
    
            lists[0].style.borderBottom = '2px solid white'
            lists[1].style.borderBottom = 'none'
            lists[2].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left === '-130%'){
            
            home.style.left = '-65%'
            about.style.left = '0'
            projects.style.left = '65%'
            contact.style.left = '130%'
    
            contact.style.opacity = '0'
            home.style.opacity = '0'
            about.style.opacity = '1'
            projects.style.opacity = '0'
    
            num[0].textContent = "02/"
    
            lists[1].style.borderBottom = '2px solid white'
            lists[0].style.borderBottom = 'none'
            lists[2].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left === '-195%'){
    
            home.style.left = '-130%'
            about.style.left = '-65'
            projects.style.left = '0%'
            contact.style.left = '65%'
    
            contact.style.opacity = '0'
            home.style.opacity = '0'
            about.style.opacity = '0'
            projects.style.opacity = '1'
            
            num[0].textContent = "03/"
    
            lists[2].style.borderBottom = '2px solid white'
            lists[0].style.borderBottom = 'none'
            lists[1].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    }else{
        if( home.style.left === '-100%'){

            home.style.left = '0'
            about.style.left = '100%'
            projects.style.left = '200%'
            contact.style.left = '300%'
    
            contact.style.opacity = '0'
            home.style.opacity = '1'
            about.style.opacity = '0'
            projects.style.opacity = '0'
    
            num[0].textContent = "01/"
    
            lists[0].style.borderBottom = '2px solid white'
            lists[1].style.borderBottom = 'none'
            lists[2].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left === '-200%'){
            
            home.style.left = '-100%'
            about.style.left = '0'
            projects.style.left = '100%'
            contact.style.left = '200%'
    
            contact.style.opacity = '0'
            home.style.opacity = '0'
            about.style.opacity = '1'
            projects.style.opacity = '0'
    
            num[0].textContent = "02/"
    
            lists[1].style.borderBottom = '2px solid white'
            lists[0].style.borderBottom = 'none'
            lists[2].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    
    
        if( home.style.left === '-300%'){
    
            home.style.left = '-200%'
            about.style.left = '-100'
            projects.style.left = '0%'
            contact.style.left = '100%'
    
            contact.style.opacity = '0'
            home.style.opacity = '0'
            about.style.opacity = '0'
            projects.style.opacity = '1'
            
            num[0].textContent = "03/"
    
            lists[2].style.borderBottom = '2px solid white'
            lists[0].style.borderBottom = 'none'
            lists[1].style.borderBottom = 'none'
            lists[3].style.borderBottom = 'none'
        }
    }
   
}




































let home2 = document.getElementById('home')
if(home2.offsetWidth > 480){
    function home() {
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
        
    
    
        home.style.left = '0'
        about.style.left = '65%'
        projects.style.left = '130%'
        contact.style.left = '195%'
    
        contact.style.opacity = '0'
        home.style.opacity = '1'
        about.style.opacity = '0'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = '2px solid white'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "01/"
    }
    
    function about(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-65%'
        about.style.left = '0'
        projects.style.left = '65%'
        contact.style.left = '130%'
    
        contact.style.opacity = '0'
        home.style.opacity = '0'
        about.style.opacity = '1'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = '2px solid white'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "02/"
    }
    
    function services(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-130%'
        about.style.left = '-65%'
        projects.style.left = '0'
        contact.style.left = '65%'
    
        contact.style.opacity = '0'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '1'
    
        lists[2].style.borderBottom = '2px solid white'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "03/"
    }
    
    function contact(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-195%'
        about.style.left = '-130%'
        projects.style.left = '-65%'
        contact.style.left = '0%'
    
        contact.style.opacity = '1'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = '2px solid white'

        num[0].textContent = "04/"
    }
}else{
    function home() {
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
        
    
    
        home.style.left = '0'
        about.style.left = '100%'
        projects.style.left = '200%'
        contact.style.left = '300%'
    
        contact.style.opacity = '0'
        home.style.opacity = '1'
        about.style.opacity = '0'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = '2px solid white'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "01/"
    }
    
    function about(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-100%'
        about.style.left = '0'
        projects.style.left = '100%'
        contact.style.left = '200%'
    
        contact.style.opacity = '0'
        home.style.opacity = '0'
        about.style.opacity = '1'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = '2px solid white'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "02/"
    }
    
    function services(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-200%'
        about.style.left = '-10%'
        projects.style.left = '0'
        contact.style.left = '100%'
    
        contact.style.opacity = '0'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '1'
    
        lists[2].style.borderBottom = '2px solid white'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = 'none'

        num[0].textContent = "03/"
    }
    
    function contact(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-300%'
        about.style.left = '-200%'
        projects.style.left = '-100%'
        contact.style.left = '0%'
    
        contact.style.opacity = '1'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = '2px solid white'

        num[0].textContent = "04/"
    }
}

if(home2.offsetWidth > 480){
    function contactButton(){
        let home = document.getElementById('home')
        let about = document.getElementById('about')
        let projects = document.getElementById('projects')
        let contact = document.getElementById('contact')
    
    
    
        home.style.left = '-300%'
        about.style.left = '-200%'
        projects.style.left = '-100%'
        contact.style.left = '0%'
    
        contact.style.opacity = '1'
        home.style.opacity = '0'
        about.style.opacity = '0'
        projects.style.opacity = '0'
    
        lists[2].style.borderBottom = 'none'
        lists[0].style.borderBottom = 'none'
        lists[1].style.borderBottom = 'none'
        lists[3].style.borderBottom = '2px solid white'
    
        num[0].textContent = "04/"
    }
}else{
    let home = document.getElementById('home')
    let about = document.getElementById('about')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')



    home.style.left = '-195%'
    about.style.left = '-130%'
    projects.style.left = '-65%'
    contact.style.left = '0%'

    contact.style.opacity = '1'
    home.style.opacity = '0'
    about.style.opacity = '0'
    projects.style.opacity = '0'

    lists[2].style.borderBottom = 'none'
    lists[0].style.borderBottom = 'none'
    lists[1].style.borderBottom = 'none'
    lists[3].style.borderBottom = '2px solid white'

    num[0].textContent = "04/"
}
















   



 