//Main button variables
const button = document.getElementById('dollar');
const counter = document.getElementById('counter');

//Current amount of money
let dollarAmount = Number(counter.innerText);

//Main button
button.addEventListener('click', () => {
    dollarAmount = dollarAmount + 1;
    counter.innerText = dollarAmount;
});

//Upgrade variables
const upg1 = document.getElementById('upg1');
let hasUpg1 = false;
const upg1Cost = 50;

const upg2 = document.getElementById('upg2');
let hasUpg2 = false;
const upg2Cost = 250;

const upg3 = document.getElementById('upg3');
let hasUpg3 = false;
const upg3Cost = 1000;

const upg4 = document.getElementById('upg4');
let hasUpg4 = false;
const upg4Cost = 10000;

//Function for the upgrade buttons
function upgrade(hasUpg, buttonText, upgCost) {
if(dollarAmount >= upgCost && hasUpg === false) {
    hasUpg = true;
    dollarAmount = dollarAmount - upgCost;
    counter.innerText = dollarAmount;
}

if(hasUpg === true) {
    buttonText.innerText = 'Sold | Cost: ' + upgCost;
}

return hasUpg;
};

//Upgrade money increments
setInterval(() => {
    if (hasUpg1) {
        dollarAmount = dollarAmount + 5;
        counter.innerText = dollarAmount
    }
}, 1000)

setInterval(() => {
    if (hasUpg2) {
        dollarAmount = dollarAmount + 25;
        counter.innerText = dollarAmount
    }
}, 1000)

setInterval(() => {
    if (hasUpg3) {
        dollarAmount = dollarAmount + 50;
        counter.innerText = dollarAmount
    }
}, 1000)

setInterval(() => {
    if (hasUpg4) {
        dollarAmount = dollarAmount + 10000;
        counter.innerText = dollarAmount
    }
}, 1000)

//Upgrade buttons
upg1.addEventListener('click', () => {hasUpg1 = upgrade(hasUpg1, upg1, upg1Cost)});

upg2.addEventListener('click', () => {hasUpg2 = upgrade(hasUpg2, upg2, upg2Cost)});

upg3.addEventListener('click', () => {hasUpg3 = upgrade(hasUpg3, upg3, upg3Cost)});

upg4.addEventListener('click', () => {hasUpg4 = upgrade(hasUpg4, upg4, upg4Cost)});


//Win condition
let hasWon = false;
setInterval(() => {
    if(hasUpg4 && !hasWon) {
        alert('You did it! You are rich!')
        hasWon = true;
    }
}, 100)