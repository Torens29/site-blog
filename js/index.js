const buttonTheme = document.querySelector('#button-theme-img');
const Body = document.querySelector('body');
const HideMenuOpen = document.querySelector('.header__menu-button');
const HideMenu = document.querySelector('.hide-menu');
const HideMenuClose = document.querySelector('.hide-menu__cross');

const ZoomImg = document.querySelector('.windowImg__selected');
const ImgTags = document.querySelectorAll('img');
const newImg = document.createElement('img');

for (const img of ImgTags) {
    img.addEventListener('click', () => {

        newImg.setAttribute('src', img.getAttribute('src'));
        ZoomImg.appendChild(newImg);
        ZoomImg.style.display = 'flex';
    });
}

ZoomImg.addEventListener('click', () => {
    ZoomImg.style.display = 'none';
    ZoomImg.removeChild(newImg);
});

HideMenuOpen.addEventListener('click', () => {
    HideMenu.style.display = 'flex';
    console.log('click hide-menu open');
});

HideMenuClose.addEventListener('click', () => {
    HideMenu.style.display = 'none';
    console.log('click hide-menu close');
});
buttonTheme.onclick = () => {
    console.log(Body.classList.contains('dark-theme'));

    if (Body.classList.contains('dark-theme')) {
        Body.classList.remove('dark-theme');
    } else {
        Body.classList.add('dark-theme');
    }
};
console.log(buttonTheme);

//???
