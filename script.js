let countdown;
const timerDisplay = document.querySelector('.timer_display-left');
const endTime = document.querySelector('.timer_display-end');

function timer(seconds) {

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