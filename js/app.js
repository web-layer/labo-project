

let showmenu = document.querySelector(".aside_wrapper")
let btn = document.querySelector('.perent')
let menu = document.querySelector('.main-menu')
let btnmenu = document.querySelector('.menu-bars')
btn.addEventListener('click', function () {
    showmenu.classList.toggle('opne')
})

btnmenu.addEventListener('click', function () {
  menu.classList.toggle('active')
})





console.log(showmenu);