const hamburger_icon = document.querySelector('#hambuger');
const hamburger_content = document.getElementById('nav_content');

// hamburger_content = hamburger_content.style.transform = 2s;


hamburger_icon.addEventListener('click', function () {
    hamburger_content.classList.toggle('hidden');
});