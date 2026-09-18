const button = document.getElementById('dollar');
const counter = document.getElementById('counter');
let hasUpg1 = false;
let hasUpg2 = false;
let hasUpg3 = false;
let hasUpg4 = false;
let hasWon = false;

let dollarAmount = Number(counter.innerText);

//Main button
button.addEventListener('click', () => {
    dollarAmount = dollarAmount + 1;
    counter.innerText = dollarAmount;
});

const upg1 = document.getElementById('upg1');
const upg2 = document.getElementById('upg2');
const upg3 = document.getElementById('upg3');
const upg4 = document.getElementById('upg4');


//Upgrade 1
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


//Upgrade 2
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
        dollarAmount = dollarAmount + 25;
        counter.innerText = dollarAmount
    }
}, 1000)


//Upgrade 3
setInterval(() => {
    if(hasUpg3 === true) {
        upg3.innerText = 'Sold | Cost: 1,000'
    }
    else if(hasUpg3 === false && dollarAmount >= 1000) {
        upg3.innerText = 'Buy | Cost: 1,000'
    }
}, 100)

upg3.addEventListener('click', () => {
    if(dollarAmount >= 1000 && hasUpg3 === false) {
    hasUpg3 = true;
    dollarAmount = dollarAmount - 1000;
    counter.innerText = dollarAmount;
    }
});

setInterval(() => {
    if (hasUpg3) {
        dollarAmount = dollarAmount + 50;
        counter.innerText = dollarAmount
    }
}, 1000)


//Upgrade 4
setInterval(() => {
    if(hasUpg4 === true) {
        upg4.innerText = 'Sold | Cost: 10,000'
    }
    else if(hasUpg4 === false && dollarAmount >= 10000) {
        upg4.innerText = 'Buy | Cost: 10,000'
    }
}, 100)

upg4.addEventListener('click', () => {
    if(dollarAmount >= 10000 && hasUpg4 === false) {
    hasUpg4 = true;
    dollarAmount = dollarAmount - 10000;
    counter.innerText = dollarAmount;
    }
});

setInterval(() => {
    if (hasUpg4) {
        dollarAmount = dollarAmount + 100;
        counter.innerText = dollarAmount
    }
}, 1000)

//Win condition
setInterval(() => {
    if(hasUpg4 === true && hasWon === false) {
        alert('You did it! You are rich!')
        hasWon = true;
    }
}, 100)