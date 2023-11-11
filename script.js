
function hamburgerMenuClick() {
    const navList2 = document.getElementById('nav-list-2-container')
    const burgerIcon = document.getElementById('burger-icon')

    if (navList2.style.display == 'none') {
        navList2.style.display = 'flex'
        burgerIcon.innerHTML = 'close'
    }   else {
        navList2.style.display = 'none'
        burgerIcon.innerHTML = 'menu'
        }
}