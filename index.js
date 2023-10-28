let themeButton = document.querySelector('.changeTheme')
let currentTheme = 'dark-theme'

themeButton.addEventListener('click', function() {

    if (currentTheme === 'light-theme') {
        document.body.style.backgroundColor = '#1e1f27';
        document.documentElement.style.setProperty('--text', 'white')
        document.documentElement.style.setProperty('--pink', '#ee2db4')
        footerImg.style.filter = 'invert(100%)'
        themeButton.style.backgroundImage = 'url(../rsschool-cv/assets/icons/light_mode.png)'
        themeButton.style.filter = 'invert(100%)'

        currentTheme = 'dark-theme';
    } else {
        document.body.style.backgroundColor = '#fafafa';
        document.documentElement.style.setProperty('--text', 'black')
        document.documentElement.style.setProperty('--pink', '#5c0042')
        footerImg.style.filter = 'invert(0%)'
        themeButton.style.backgroundImage = 'url(../rsschool-cv/assets/icons/night_mode.png)'
        themeButton.style.filter = 'invert(0%)'

        currentTheme = 'light-theme';
    }
});