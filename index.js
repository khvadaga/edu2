const navitems = document.querySelector('.navlist')
const burger = document.querySelector('.burger')
const closeBtn = document.querySelector('.closebutton')
const sidebar = document.querySelector('.sideBar')
const sidebarcontainer = document.querySelector('.sidebarcontainer');


burger.addEventListener('click', () => { 
    sidebarcontainer.classList.toggle('blur')
    sidebar.classList.toggle('active')
    
})     


closeBtn.addEventListener('click', () => { 
    sidebar.classList.remove('active')
    sidebarcontainer.classList.remove('blur')
} )