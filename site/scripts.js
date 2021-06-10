// ============== Header ==============

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
  
}

btnMobile.addEventListener('click', toggleMenu)

document.querySelector('#menu ul')
  .addEventListener('click', function(){
    document
    .getElementById('nav')
    .classList.remove('active')
  })