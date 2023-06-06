let countdown;
const timerDisplay = document.querySelector('.timer_display-left');
const endTime = document.querySelector('.timer_display-end');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);

    const currentTime = Date.now();
    const endTime = currentTime + seconds * 1000;

displayTimer(seconds);
displayEndTime(endTime);

countdown = setInterval(() => {

    const secondsLeft = Math.round((endTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
    }

    displayTimer(secondsLeft);

}, 1000);

}

function displayTimer(seconds) {

    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ""}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;

    console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    endTime.textContent = `Вернуться в ${hour}:${minutes < 10 ? '0' : ""}${minutes}`;

}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.timerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const minutes = parseInt(this.minutes.value);
    timer(minutes * 60);

    this.reset();
})