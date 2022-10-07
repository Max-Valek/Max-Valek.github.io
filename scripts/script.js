const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    })
})
const observeStag = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('show-stag', entry.isIntersecting);
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenStag = document.querySelectorAll('.hidden-stag');
hiddenStag.forEach((el) => observeStag.observe(el));

let menuBox = document.getElementById("menu-box");
let menuIcon = document.getElementById("menu-icon");

menuIcon.onclick = function() {
    menuBox.classList.toggle("open-menu");
    if(menuBox.classList.contains("open-menu")){
        menuIcon.innerHTML = '<i class="fa-solid fa-xmark fa-2xl"></i>';
    }
    else {
        menuIcon.innerHTML = '<i class="fa-solid fa-bars fa-2xl"></i>';
    }
}