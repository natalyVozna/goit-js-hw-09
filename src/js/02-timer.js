import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');
let startTime;

startBtn.setAttribute('disabled', true);
startBtn.addEventListener('click', onStartTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startTime = selectedDates[0];
    if (selectedDates[0].getTime() < new Date().getTime()) {
      Notify.warning('Please choose a date in the future');
      //   window.alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

function onStartTimer() {
  startBtn.setAttribute('disabled', true);
  inputEl.setAttribute('disabled', true);

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = startTime.getTime() - currentTime;
    const timeComponents = convertMs(deltaTime);

    updateClockFace(timeComponents);
    if (
      timeComponents.days == 0 &&
      timeComponents.minutes == 0 &&
      timeComponents.hours == 0 &&
      timeComponents.seconds == 0
    ) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function updateClockFace(time) {
  document.querySelector('[data-days]').textContent =
    String(time.days).length < 2
      ? addLeadingZero(time.days)
      : String(time.days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(
    time.hours
  );
  document.querySelector('[data-minutes]').textContent = addLeadingZero(
    time.minutes
  );
  document.querySelector('[data-seconds]').textContent = addLeadingZero(
    time.seconds
  );
}

function addLeadingZero(val) {
  return String(val).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
