
const btn = document.querySelectorAll('button');

// function trafficLight() {
//   btn[0].classList.add('red');
//   setTimeout(() => {
//     btn[0].classList.remove('red');
//     btn[1].classList.add('yellow');

//     setTimeout(() => {
//       btn[1].classList.remove('yellow');
//       btn[2].classList.add('green');

//       setTimeout(() => {
//         btn[2].classList.remove('green');
//         trafficLight();
//       }, 3000);

//     }, 2000);

//   }, 3000);
// }

// trafficLight();

// With Promise
function red() {
  return new Promise((resolve) => {
    btn[0].classList.add('red');
    setTimeout(() => {
      btn[0].classList.remove('red');
      resolve();
    }, 3000);
  });
}
function yellow() {
  return new Promise((resolve) => {
    btn[1].classList.add('yellow');
    setTimeout(() => {
      btn[1].classList.remove('yellow');
      resolve();
    }, 2000);
  });
}
function green() {
  return new Promise((resolve) => {
    btn[2].classList.add('green');
    setTimeout(() => {
      btn[2].classList.remove('green');
      resolve();
    }, 3000);
  });
}
async function trafficlight2() {
  await red();
  await yellow();
  await green();
  trafficlight2(); 
}
trafficlight2();

