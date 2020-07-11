let current = document.getElementById('theme');
let swtchrbtn = document.getElementById('themetoggle');
let toggleIcon = document.getElementById('themetoggle-icon');
let appIcon = document.getElementById('app-icon');

function switchTheme() {
    if (current.getAttribute('href') == 'res/bootswatch/[cosmo]bootstrap.min.css') {

        current.href = 'res/bootswatch/[cyborg]bootstrap.min.css';
        swtchrbtn.style.backgroundColor = 'white';
        toggleIcon.style.color = '#1b1b1b';
        appIcon.src = 'icons/app_icon_light.png'

    }
    else {

        current.href = 'res/bootswatch/[cosmo]bootstrap.min.css';
        swtchrbtn.style.backgroundColor = '#1b1b1b';
        toggleIcon.style.color = 'white';
        appIcon.src = 'icons/app_icon_dark.png'
    }
}