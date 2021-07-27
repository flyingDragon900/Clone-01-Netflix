let sign = document.getElementById("sign")
var signIn = document.getElementsByClassName("sign-in")
var headerInside = document.getElementsByClassName("header__inside")
sign.addEventListener('click', () => {
    for (let i = 0; i < signIn.length; i++) {
        signIn[i].style.display = 'block'
    }
    for (let i = 0; i < headerInside.length; i++) {
        headerInside[i].style.display = 'none'
    }
})
sign.addEventListener('dblclick' , ()=>{
    for (let i = 0; i < signIn.length; i++) {
        signIn[i].style.display = 'none'
    }
    for (let i = 0; i < headerInside.length; i++) {
        headerInside[i].style.display = 'block'
    }
})


