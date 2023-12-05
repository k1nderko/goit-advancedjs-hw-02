import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    const delay = parseInt(document.querySelector('input[name="delay"]').value);
    const step = parseInt(document.querySelector('input[name="step"]').value);
    const amount = parseInt(document.querySelector('input[name="amount"]').value);

    for (let i = 1; i <= amount; i++) {
        const currentDelay = delay + (i - 1) * step;

        createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          iziToast.success({ message: `✅ Fulfilled promise ${position} in ${delay}ms` });
        })
        .catch(({ position, delay }) => {
          iziToast.error({ message: `❌ Rejected promise ${position} in ${delay}ms` });
        });
    }
});
