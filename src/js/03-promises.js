import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { delay, step, amount } = e.target.elements;

  let countDelay = +delay.value;
  for (let i = 1; i <= +amount.value; i++) {
    countDelay = i !== 1 ? countDelay + +step.value : +delay.value;

    createPromise(i, countDelay)
      .then(val => Notify.success(val))
      .catch(error => Notify.failure(error));
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
