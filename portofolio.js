let barIcon = document.querySelector('.menuBar');
let navBar = document.querySelector('.navigation');

barIcon.onclick = () => {
  navBar.classList.toggle('close');
  barIcon.classList.toggle('open')
}
//type effect
// let typeWord = ["Frontend Developer", "UI&UX Designer", "Full Stack Developer"];
// let displayText = '';
// let wordIndex = 0;
// let charIndex = 0;


// type()
// function type() {
//   if (charIndex < typeWord[wordIndex].length) {
//     displayText = typeWord[wordIndex][charIndex];
//     charIndex++;
//     document.querySelector('.text-type').innerHTML += displayText;
//     setTimeout(type, 200);
//   } else {
//     setTimeout(erase,1000);
//   }
// }
// function erase() {
//   if (charIndex > 0) {
//     displayText = typeWord[wordIndex].slice(0,charIndex-1);
//     charIndex--;
//     // console.log(displayText);
//     document.querySelector('.text-type').innerHTML = displayText;
//     setTimeout(erase,100);
//   } else {
//     wordIndex++;
//     if (wordIndex >= typeWord.length) {
//       wordIndex = 0;
//     }
//     type();
//   }
// }

var typed = new Typed('.text-type', {
      strings: ["Frontend Developer", "UI,UX Designer", "Full Stack Developer"],
      typeSpeed: 60,
      startDelay: 50,
      loop: true,
      backSpeed: 150,
      cursorChar: '-',
});
//theme switcher
const themeBtn = document.querySelector('.navigation i');
themeBtn.onclick = () => document.querySelector('.changeColor').classList.toggle('themeToggle');

function themeColor(color) {
  document.documentElement.style.setProperty('--main-color', color);
  localStorage.setItem('theme',color)
}
if (localStorage.getItem) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem('theme'));
}
//counter
// for (let i = 0; i <= 10; i++){
//   setTimeout(() => {
//     document.querySelector('.experience h2').textContent='+'+i
//   },i*250);
// }
function counter(end, selector, duration) {
  let countElement = document.querySelector(selector)
  for (let i = 0; i <= end; i++){
     setTimeout(() => {
    countElement.textContent='+'+i
  },i*duration);
  }
}
//for delay counter's appearance
setTimeout(() => {
  counter(3, '.experience h2', 200);
  counter(7, '.Skills h2', 200);
  counter(35, '.Projects h2', 100);
}, 2000)


// project filter
let filterbtns = document.querySelectorAll('.btn');
for (let i = 0; i < filterbtns.length; i++){
  filterbtns[i].addEventListener('click', function(){
    filterbtns.forEach((e) => {
      e.classList.remove('active')
    })
    this.classList.add('active')
  })
}