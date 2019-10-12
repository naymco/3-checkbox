let bodyTheme = document.getElementById('body');
let light = document.getElementById('light');
let darkLight = document.getElementById('dark-light');
let dark = document.getElementById('dark');
let checkOn = document.getElementsByTagName('label');


light.addEventListener('change', function () {
    bodyTheme.classList.toggle('light');
});

darkLight.addEventListener('change', function () {
    bodyTheme.classList.toggle('dark-light');
});

dark.addEventListener('change', function () {
    bodyTheme.classList.toggle('dark');
});