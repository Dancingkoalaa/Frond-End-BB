/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
window.addEventListener('load', init);

function init() {
    let flipButton = document.getElementById('flip-menu');
    flipButton.addEventListener('click', flipMenu);
}

function flipMenu() {
    let menu = document.getElementById('myTopnav');
    if (menu.classList.contains('responsive')) {
        menu.classList.remove('responsive');
    } else {
        menu.classList.add('responsive');
    }
}
