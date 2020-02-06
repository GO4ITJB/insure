var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
  nav.classList.toggle('header__nav-items--hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', function(e){
  nav.classList.add('header__nav-items--hide-mobile');
  e.preventDefault();
});