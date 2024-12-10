const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const timer = document.getElementById('timer');

const pomadoro = document.getElementById('pomadoro');
const sBreak = document.getElementById('s-break');
const lBreak = document.getElementById('l-break');

let workingTime: number = 25 * 60;
let intervalId: number | undefined;

function updateTimer() {
    const minutes: number = Math.floor(workingTime / 60);
    const seconds: number = workingTime % 60;
    
    if (timer) {
        timer.textContent = `${minutes}:${seconds}`;
    }

    if (workingTime > 0) {
        workingTime--;
    } else {
        clearInterval(intervalId);
        intervalId = undefined;
    }
}

pomadoro?.addEventListener('click', () => {
    workingTime = 25 * 60;
    updateTimer();
});

sBreak?.addEventListener('click', () => {
    workingTime = 5 * 60;
    updateTimer();
});

lBreak?.addEventListener('click', () => {
    workingTime = 15 * 60;
    updateTimer();
});

startBtn?.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateTimer, 1000); 
    }
});

resetBtn?.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = undefined;
    updateTimer(); 
});
