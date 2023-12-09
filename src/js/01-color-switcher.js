function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let intervalId;

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = false;
  stopButton.disabled = true;
});

document.querySelector('[data-start]').addEventListener('click', startChangingColor);
document.querySelector('[data-stop]').addEventListener('click', stopChangingColor);

function startChangingColor() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = true;
  stopButton.disabled = false;

  clearInterval(intervalId);

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangingColor() {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');

  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);

  document.body.style.backgroundColor = '';
}