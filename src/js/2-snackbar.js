import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form.form');
const delayInput = document.querySelector('input[name=delay]');
const fulfilledInput = document.querySelector('input[value=fulfilled]');
const rejectedInput = document.querySelector('input[value=rejected]');

form.addEventListener('submit', onCreatePromiseClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onCreatePromiseClick(event) {
  event.preventDefault();
  const inputDelay = Number(delayInput.value);
  const inputFulfilled = Number(fulfilledInput.checked); 
  const inputRejected = Number(rejectedInput.checked); 

  for (let i = 1; i <= inputRejected; i += 1) {
    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay}ms`);
        iziToast.show({
          title: 'Success',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          theme: 'dark',
          color: 'green',
          position: 'topRight',
        });
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay}ms`);
        iziToast.show({
          title: 'Wrong',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
          theme: 'dark',
          color: 'red',
          position: 'topRight',
        });
      });
  }
}
