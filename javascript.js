const button = document.getElementById('dollar');
const counter = document.getElementById('counter');

let dollarAmount = Number(counter.innerText);

button.addEventListener('click', () => {
    dollarAmount = dollarAmount + 1;
    counter.innerText = dollarAmount;
});