let box = document.getElementsByClassName('box')
let member = document.getElementsByClassName('member')
let doubleBox = document.getElementsByClassName('doubleBox')
let doubleBox1 = document.getElementsByClassName('doubleBox1')
let doubleBox2 = document.getElementsByClassName('doubleBox2')
let doubleBox3 = document.getElementsByClassName('doubleBox3')
let doubleBox4 = document.getElementsByClassName('doubleBox4')
let doubleBox5 = document.getElementsByClassName('doubleBox5')
let a = 0
let e = 0

let arrow = document.getElementsByClassName('team-arrow')

arrow[0].addEventListener('mouseover', ()=>{
    arrow[0].style.width = '60px'
})
arrow[0].addEventListener('mouseout', ()=>{
    arrow[0].style.width = '50px'
})


arrow[0].addEventListener('click', ()=>{
    
    if (a === 5) {
        doubleBox[0].style.opacity = '1'
        doubleBox1[0].style.opacity = '0'
        doubleBox2[0].style.opacity = '0'
        doubleBox3[0].style.opacity = '0'
        doubleBox4[0].style.opacity = '0'
        doubleBox5[0].style.opacity = '0'
        a = 0
    }
    if (a === 4) {
        doubleBox[0].style.opacity = '0'
        doubleBox1[0].style.opacity = '0'
        doubleBox2[0].style.opacity = '0'
        doubleBox3[0].style.opacity = '0'
        doubleBox4[0].style.opacity = '0'
        doubleBox5[0].style.opacity = '1'
        console.log('funguje');
        a++
    }
    if (a === 3) {
        doubleBox[0].style.opacity = '0'
        doubleBox1[0].style.opacity = '0'
        doubleBox2[0].style.opacity = '0'
        doubleBox3[0].style.opacity = '0'
        doubleBox4[0].style.opacity = '1'
        doubleBox5[0].style.opacity = '0'
        console.log('funguje');
        a++
    }
    if (a === 2) {
        doubleBox[0].style.opacity = '0'
        doubleBox1[0].style.opacity = '0'
        doubleBox2[0].style.opacity = '0'
        doubleBox3[0].style.opacity = '1'
        doubleBox4[0].style.opacity = '0'
        doubleBox5[0].style.opacity = '0'
        console.log('funguje');
        a++
    }
    if (a === 1) {
        doubleBox[0].style.opacity = '0'
        doubleBox1[0].style.opacity = '0'
        doubleBox2[0].style.opacity = '1'
        doubleBox3[0].style.opacity = '0'
        doubleBox4[0].style.opacity = '0'
        doubleBox5[0].style.opacity = '0'
        console.log('funguje');
        a++
    }
    if (a === 0) {
        doubleBox[0].style.opacity = '0'
        doubleBox1[0].style.opacity = '1'
        doubleBox2[0].style.opacity = '0'
        doubleBox3[0].style.opacity = '0'
        doubleBox4[0].style.opacity = '0'
        doubleBox5[0].style.opacity = '0'
        console.log('funguje');
        a++
    }
    
    console.log(a);
})



