import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function startTimer(endDate) {
  const intervalId = setInterval(() => {
    const currentDate = new Date();
    const timeDifference = endDate - currentDate;

    if (timeDifference <= 0) {
      clearInterval(intervalId);
      updateTimerValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: "Success",
        message: "Timer reached zero!",
      });
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerValues({ days, hours, minutes, seconds });
    }
  }, 1000);
}

function updateTimerValues({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

const datePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function(selectedDates) {
    const selectedDate = selectedDates[0];

    if (!selectedDate) {
      document.querySelector('[data-start]').disabled = true;
    } else if (selectedDate <= new Date()) {
      document.querySelector('[data-start]').disabled = true;
      window.alert("Please choose a date in the future.");
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
});

document.querySelector('[data-start]').addEventListener('click', () => {
  const selectedDate = datePicker.selectedDates[0];
  startTimer(selectedDate);
});