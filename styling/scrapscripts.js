const btn = document.getElementById('show-hide');
const bar = document.getElementById('bar');
const barsec = document.getElementById('barsec');
const card = document.getElementById('submenu');

btn.addEventListener("click", () => {
    bar.classList.toggle('open');
    barsec.classList.toggle('open');
    card.classList.toggle('open');
});