//Button variables
const button = document.getElementById('dollar');
const counter = document.getElementById('counter');
const job = document.getElementById('job');

//Money counter
let dollarAmount = 0;

//Job upgrade
const jobTitle = document.getElementById('jobTitle');
const jobEarnings = document.getElementById('jobEarnings');
const jobUpgradeImg = document.getElementById('jobUpgradeImg');
const jobImg = document.getElementById('jobImg');
const currentJob = document.getElementById('currentJob');
const currentClickNum = document.getElementById('currentClickNum');
let jobPay = 1;
let jobPrice = 20;

job.addEventListener('click', () => {
    clickDoubler(jobPrice);
})

function clickDoubler(price) {
    if(dollarAmount >= price) {
        jobPay = jobPay * 2;
        jobPrice = jobPrice * 10;
        dollarAmount = dollarAmount - price;
        counter.innerText = dollarAmount + '$';
        job.innerText = 'New Job | Cost: ' + jobPrice + '$';
        jobTitle.innerText = 'Another Job';
        jobUpgradeImg.src = '';
        currentClickNum.innerText = jobPay + '$/Click';
        jobEarnings.innerText = jobPay * 2 + '$/Click';
        currentJob.innerText = 'Fast Food Worker';
        jobImg.src = 'img/fastFoodWorker.jpg';
    }
}

//Main button
button.addEventListener('click', () => {
    mainButtonClick(jobPay);
});

function mainButtonClick(clickAmount) {
    dollarAmount = dollarAmount + clickAmount;
    counter.innerText = dollarAmount + '$';
}

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

const upg5 = document.getElementById('upg5');
let hasUpg5 = false;
const upg5Cost = 10000;

const upg6 = document.getElementById('upg6');
let hasUpg6 = false;
const upg6Cost = 10000;

//Function for the upgrade buttons
function upgrade(hasUpg, buttonText, upgCost) {
if(dollarAmount >= upgCost && hasUpg === false) {
    hasUpg = true;
    dollarAmount = dollarAmount - upgCost;
    counter.innerText = dollarAmount + '$';
}

if(hasUpg === true) {
    buttonText.innerText = 'Owned';
}

return hasUpg;
};

//Upgrade money increments
setInterval(() => {
    if (hasUpg1) {
        dollarAmount = dollarAmount + 5;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

setInterval(() => {
    if (hasUpg2) {
        dollarAmount = dollarAmount + 25;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

setInterval(() => {
    if (hasUpg3) {
        dollarAmount = dollarAmount + 50;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

setInterval(() => {
    if (hasUpg4) {
        dollarAmount = dollarAmount + 100;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

setInterval(() => {
    if (hasUpg5) {
        dollarAmount = dollarAmount + 500;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

setInterval(() => {
    if (hasUpg6) {
        dollarAmount = dollarAmount + 2500;
        counter.innerText = dollarAmount + '$';
    }
}, 1000)

//Upgrade buttons
upg1.addEventListener('click', () => {hasUpg1 = upgrade(hasUpg1, upg1, upg1Cost)});

upg2.addEventListener('click', () => {hasUpg2 = upgrade(hasUpg2, upg2, upg2Cost)});

upg3.addEventListener('click', () => {hasUpg3 = upgrade(hasUpg3, upg3, upg3Cost)});

upg4.addEventListener('click', () => {hasUpg4 = upgrade(hasUpg4, upg4, upg4Cost)});

upg5.addEventListener('click', () => {hasUpg5 = upgrade(hasUpg5, upg5, upg5Cost)});

upg6.addEventListener('click', () => {hasUpg6 = upgrade(hasUpg6, upg6, upg6Cost)});


//Win condition
let hasWon = false;
setInterval(() => {
    if(hasUpg6 && !hasWon) {
        alert('You did it! You are rich!')
        hasWon = true;
    }
}, 100)