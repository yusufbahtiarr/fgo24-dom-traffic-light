
const btn = document.querySelectorAll('button');

function trafficLight() {
  btn[0].classList.add('red');
  setTimeout(() => {
    btn[0].classList.remove('red');
    btn[1].classList.add('yellow');

    setTimeout(() => {
      btn[1].classList.remove('yellow');
      btn[2].classList.add('green');

      setTimeout(() => {
        btn[2].classList.remove('green');
        trafficLight();
      }, 3000);

    }, 2000);

  }, 3000);
}

trafficLight();


// function red() {
//   return new Promise ((resolve, reject) => {
//     btn[0].classList.add('red');
//     setInterval (() => {
//       resolve()
//     }, 3000)
//   })
// }
// function yellow1() {
//   return new Promise ((resolve, reject) => {
//     btn[0].classList.remove('red');
//     btn[1].classList.add('yellow');
//     // btn[2].classList.remove();
//     setInterval (() => {
//       resolve()
//     }, 2000)
//   })
// }
// function green() {
//   return new Promise ((resolve, reject) => {
//     btn[1].classList.remove('yellow');
//     btn[2].classList.add('green');
//     setInterval (() => {
//       resolve()
//     }, 3000)
//     // red()
//   })
// }
// function reset() {
//   return new Promise ((resolve, reject) => {
//     btn[0].classList.remove('red');
//     btn[1].classList.remove('yellow');
//     btn[2].classList.remove('green');
//     setInterval (() => {
//       resolve()
//     }, 500)
//   })
// }

// async function trafficlight2() {
//   await red();
//   await yellow1();
//   await green();
//   await reset();
// }
// trafficlight2();

