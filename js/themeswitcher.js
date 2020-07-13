function switchTheme() {
	let current = document.getElementById('theme');
	let swtchrbtn = document.getElementById('themetoggle');
	let toggleIcon = document.getElementById('themetoggle-icon');
	let appIcon = document.getElementById('app-icon');

	if (current.getAttribute('href') == 'css/themes/[cosmo]bootstrap.min.css') {
		current.href = 'css/themes/[cyborg]bootstrap.min.css';
		swtchrbtn.style.backgroundColor = 'white';
		toggleIcon.style.color = '#1b1b1b';
		appIcon.src = 'icons/app_icon_light.png';
	} else {
		current.href = 'css/themes/[cosmo]bootstrap.min.css';
		swtchrbtn.style.backgroundColor = '#1b1b1b';
		toggleIcon.style.color = 'white';
		appIcon.src = 'icons/app_icon_dark.png';
	}
}
