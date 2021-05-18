const nav = document.querySelector('.navbar')
const menuSections = document.querySelectorAll('.menu-section')
const menuTabs = document.querySelectorAll('.menu-tab')
const toggler = document.querySelector('#toggler')
menuTabs.forEach((menuTabs, index) =>
{
    menuTabs.addEventListener('click', () =>{
        menuSections.forEach(tab =>{
            tab.classList.remove('block')
        })
        menuSections[index].classList.add('block')
    })
})

document.addEventListener('DOMContentLoaded', function(){
    function addShadow()
    {
        if(window.scrollY >= 400)
        {
            nav.classList.add('shadow-bg')
        }
        else
        {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll', addShadow)
})

toggler.addEventListener('click', () =>{
    if(window.scrollY <= 400)
    {
        nav.classList.toggle('shadow-bg')
    }
})