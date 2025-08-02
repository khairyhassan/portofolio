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