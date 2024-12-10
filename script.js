"use strict";
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');
const pomadoro = document.getElementById('pomadoro');
const sBreak = document.getElementById('s-break');
const lBreak = document.getElementById('l-break');
let workingTime = 25 * 60;
let intervalId;
function updateTimer() {
    const minutes = Math.floor(workingTime / 60);
    const seconds = workingTime % 60;
    if (timer) {
        timer.textContent = `${minutes}:${seconds}`;
    }
    if (workingTime > 0) {
        workingTime--;
    }
    else {
        clearInterval(intervalId);
        intervalId = undefined;
    }
}
pomadoro === null || pomadoro === void 0 ? void 0 : pomadoro.addEventListener('click', () => {
    workingTime = 25 * 60;
    updateTimer();
});
sBreak === null || sBreak === void 0 ? void 0 : sBreak.addEventListener('click', () => {
    workingTime = 5 * 60;
    updateTimer();
});
lBreak === null || lBreak === void 0 ? void 0 : lBreak.addEventListener('click', () => {
    workingTime = 15 * 60;
    updateTimer();
});
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateTimer, 1000);
    }
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = undefined;
    updateTimer();
});
