const button = document.getElementById('dollar');
const counter = document.getElementById('counter');
let hasUpg1 = false;
let hasUpg2 = false;
let hasUpg3 = false;
let hasUpg4 = false;

let dollarAmount = Number(counter.innerText);

button.addEventListener('click', () => {
    dollarAmount = dollarAmount + 1;
    counter.innerText = dollarAmount;
});

const upg1 = document.getElementById('upg1');
const upg2 = document.getElementById('upg2');
const upg3 = document.getElementById('upg3');
const upg4 = document.getElementById('upg4');

setInterval(() => {
    if(hasUpg1 === true) {
        upg1.innerText = 'Sold | Cost: 50'
    }
    else if(hasUpg1 === false && dollarAmount >= 50) {
        upg1.innerText = 'Buy | Cost: 50'
    }
}, 100)

upg1.addEventListener('click', () => {
    if(dollarAmount >= 50 && hasUpg1 === false) {
    hasUpg1 = true;
    dollarAmount = dollarAmount - 50;
    counter.innerText = dollarAmount;
    }
});

setInterval(() => {
    if (hasUpg1) {
        dollarAmount = dollarAmount + 5;
        counter.innerText = dollarAmount
    }
}, 1000)


setInterval(() => {
    if(hasUpg2 === true) {
        upg2.innerText = 'Sold | Cost: 250'
    }
    else if(hasUpg2 === false && dollarAmount >= 250) {
        upg2.innerText = 'Buy | Cost: 250'
    }
}, 100)

upg2.addEventListener('click', () => {
    if(dollarAmount >= 250 && hasUpg2 === false) {
    hasUpg2 = true;
    dollarAmount = dollarAmount - 250;
    counter.innerText = dollarAmount;
    }
});

setInterval(() => {
    if (hasUpg2) {
        dollarAmount = dollarAmount + 20;
        counter.innerText = dollarAmount
    }
}, 1000)