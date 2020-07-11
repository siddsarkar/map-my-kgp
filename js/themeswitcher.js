let current = document.getElementById('theme');
let swtchrbtn = document.getElementById('themetoggle');
let toggleIcon = document.getElementById('themetoggle-icon');

function switchTheme() {
    if (current.getAttribute('href') == 'res/bootswatch/[cosmo]bootstrap.min.css') {

        current.href = 'res/bootswatch/[cyborg]bootstrap.min.css';
        swtchrbtn.style.backgroundColor = 'white';
        toggleIcon.style.color = '#1b1b1b';

    }
    else {

        current.href = 'res/bootswatch/[cosmo]bootstrap.min.css';
        swtchrbtn.style.backgroundColor = '#1b1b1b';
        toggleIcon.style.color = 'white';
    }
}