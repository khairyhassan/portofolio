let barIcon = document.querySelector('.menuBar');
let navBar = document.querySelector('.navigation');

barIcon.onclick = () => {
  navBar.classList.toggle('close');
  barIcon.classList.toggle('open')
}