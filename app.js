let sign = document.getElementById("sign")
var signIn = document.getElementsByClassName("sign-in")
var headerInside = document.getElementsByClassName("header__inside")
let tabBtn = document.getElementsById("tab1");
let tabPara = document.getElementsByClassName("tab");
tabBtn.addEventListener('click',()=>{
    console.log('hell');
})
sign.addEventListener('click', () => {
    for (let i = 0; i < signIn.length; i++) {
        signIn[i].style.display = 'block'
    }
    for (let i = 0; i < headerInside.length; i++) {
        headerInside[i].style.display = 'none'
    }
})
sign.addEventListener('dblclick', () => {
    for (let i = 0; i < signIn.length; i++) {
        signIn[i].style.display = 'none'
    }
    for (let i = 0; i < headerInside.length; i++) {
        headerInside[i].style.display = 'block'
    }
})








