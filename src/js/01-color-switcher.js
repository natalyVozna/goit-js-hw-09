import throttle from 'lodash.throttle';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId;
function onChangeColor(e) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtn.setAttribute('disabled', true);
  stopBtn.toggleAttribute('disabled');
}

function onStopChange(e) {
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
  clearInterval(timerId);
}

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', onStopChange);
