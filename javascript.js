//Button variables
const button = document.getElementById('dollar');
const counter = document.getElementById('counter');
const job = document.getElementById('job');

//Money counter and money per second
let dollarAmount = 0;
let upgradeAmount = 0;

//Job upgrade
const jobTitle = document.getElementById('jobTitle');
const newJobClickNum = document.getElementById('newJobClickNum');
const jobUpgradeImg = document.getElementById('jobUpgradeImg');
const jobImg = document.getElementById('jobImg');
const currentJob = document.getElementById('currentJob');
const currentClickNum = document.getElementById('currentClickNum');
let jobPay = 1;
let jobPrice = 50;

job.addEventListener('click', () => {
    clickDoubler(jobPrice);
})

function clickDoubler(price) {
    if(dollarAmount >= price) {
        jobPay = jobPay * 3;
        jobPrice = jobPrice * 10;
        dollarAmount = dollarAmount - price;
        counter.innerText = dollarAmount + '$';
        job.innerText = 'Cost: ' + jobPrice + '$';
        jobTitle.innerText = 'Construction';
        jobUpgradeImg.src = 'img/constructionWorker.jpg';
        currentClickNum.innerText = jobPay + '$/Click';
        newJobClickNum.innerText = jobPay * 3 + '$/Click';
        currentJob.innerText = 'Fast Food';
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
let upg1Inc = 5;
const upg1Cost = 50;

const upg2 = document.getElementById('upg2');
let hasUpg2 = false;
let upg2Inc = 25;
const upg2Cost = 250;

const upg3 = document.getElementById('upg3');
let hasUpg3 = false;
let upg3Inc = 50;
const upg3Cost = 1000;

const upg4 = document.getElementById('upg4');
let hasUpg4 = false;
let upg4Inc = 100;
const upg4Cost = 10000;

const upg5 = document.getElementById('upg5');
let hasUpg5 = false;
let upg5Inc = 500;
const upg5Cost = 50000;

const upg6 = document.getElementById('upg6');
let hasUpg6 = false;
let upg6Inc = 2500;
const upg6Cost = 250000;

//Function for the upgrade buttons
function upgrade(hasUpg, buttonText, upgCost, upgInc) {
if(dollarAmount >= upgCost && !hasUpg) {
    dollarAmount = dollarAmount - upgCost;
    counter.innerText = dollarAmount + '$';
    upgradeAmount = upgradeAmount + upgInc;
    hasUpg = true;
}

if(hasUpg) {
    buttonText.innerText = 'Owned';
}

return hasUpg;
};

setInterval(() => {
    dollarAmount = dollarAmount + upgradeAmount;
    counter.innerText = dollarAmount + '$';
}, 1000);

//Upgrade buttons
upg1.addEventListener('click', () => {hasUpg1 = upgrade(hasUpg1, upg1, upg1Cost, upg1Inc)});

upg2.addEventListener('click', () => {hasUpg2 = upgrade(hasUpg2, upg2, upg2Cost, upg2Inc)});

upg3.addEventListener('click', () => {hasUpg3 = upgrade(hasUpg3, upg3, upg3Cost, upg3Inc)});

upg4.addEventListener('click', () => {hasUpg4 = upgrade(hasUpg4, upg4, upg4Cost, upg4Inc)});

upg5.addEventListener('click', () => {hasUpg5 = upgrade(hasUpg5, upg5, upg5Cost, upg5Inc)});

upg6.addEventListener('click', () => {hasUpg6 = upgrade(hasUpg6, upg6, upg6Cost, upg6Inc)});


//Win condition
let hasWon = false;
setInterval(() => {
    if(hasUpg6 && !hasWon) {
        alert('You did it! You are rich!')
        hasWon = true;
    }
}, 1000)