function switchTheme() {
    let current = document.getElementById('theme');
    
    if (current.getAttribute('href') == 'css/themes/[cosmo]bootstrap.min.css') {

        current.href = 'css/themes/[cyborg]bootstrap.min.css';
        swtchrbtn.value = "Light Theme";
        ftr.style.backgroundColor = "--primary";

    }
    else {
        current.href = 'css/themes/[cosmo]bootstrap.min.css';
        swtchrbtn.value = "Dark Theme";
        ftr.style.backgroundColor = "--primary";
    }
}