import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stateInput = form.querySelector('[name="state"]:checked');

    const delay = parseInt(delayInput.value);

    const promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        const state = stateInput ? stateInput.value : null;

        if (state === 'fulfilled') {
          resolve(delay);
        } else if (state === 'rejected') {
          reject(delay);
        } else {
          reject("Invalid state");
        }
      }, delay);
    });

    promise
      .then(function(delay) {
        iziToast.success({
          title: 'Success',
          message: '✅ Fulfilled promise in ' + delay + 'ms',
        });
      })
      .catch(function(delay) {
        iziToast.error({
          title: 'Error',
          message: '❌ Rejected promise in ' + delay + 'ms',
        });
      });
      form.reset();
  });
});
