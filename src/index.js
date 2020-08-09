import './styles.css';

class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }

  get time() {
    const time = Date.parse(this.targetDate) - new Date();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      mins,
      secs,
    };
  }
}

const refs = {
  userDate: document.querySelector('input[type="datetime-local"]'),
  day: document.querySelector('span[data-value="days"]'),
  hour: document.querySelector('span[data-value="hours"]'),
  min: document.querySelector('span[data-value="mins"]'),
  sec: document.querySelector('span[data-value="secs"]'),
};

const timer = date => {
  const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: date,
  });
  return newTimer;
};

// refs.userDate.value = new Date().toISOString().slice(0, 16);

// refs.userDate.addEventListener('change', () => {
//   console.log(refs.userDate.value);
//   console.dir(refs.userDate);
// });

const countdowdID = setInterval(() => {
  refs.day.textContent = timer(refs.userDate.value).time.days;
  refs.hour.textContent = timer(refs.userDate.value).time.hours;
  refs.min.textContent = timer(refs.userDate.value).time.mins;
  refs.sec.textContent = timer(refs.userDate.value).time.secs;
  //   refs.hour.textContent = timer.time.hours;
  //   refs.min.textContent = timer.time.mins;
  //   refs.sec.textContent = timer.time.secs;
}, 1000);
