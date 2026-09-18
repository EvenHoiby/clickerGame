const button = document.getElementById('dollar');
const counter = document.getElementById('counter');
let hasUpg1 = false;

let dollarAmount = Number(counter.innerText);

button.addEventListener('click', () => {
    dollarAmount = dollarAmount + 1;
    counter.innerText = dollarAmount;
});

const upg1 = document.getElementById('upg1');
const upg2 = document.getElementById('upg2');
const upg3 = document.getElementById('upg3');
const upg4 = document.getElementById('upg4');

if(dollarAmount >= 50) {
}
upg1.addEventListener('click', () => {
    if(dollarAmount >= 50 && hasUpg1 === false) {
    hasUpg1 = true;
    dollarAmount = dollarAmount - 50;
    counter.innerText = dollarAmount;
    }
});

setInterval(() => {
    if (hasUpg1) {
        dollarAmount = dollarAmount + 1;
        counter.innerText = dollarAmount
    }
}, 1000)