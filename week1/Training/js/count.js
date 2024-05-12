const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);
console.log(increase);
console.log(decrease);

increase.addEventListener('click', function () {
  number.innerText = Number(number.textContent) + 1;
  console.log('increase가 클릭됨');
});

decrease.addEventListener('click', function () {
  number.innerText = Number(number.textContent) - 1;
  console.log('decrease가 클릭됨');
});
