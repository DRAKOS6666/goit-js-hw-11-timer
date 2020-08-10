import './styles.css';

class CountdownTimer {
  constructor(obj) {
    this.selector = obj.selector;
    this.targetDate = obj.targetDate;
  }

  set newDate(date) {
    this.refs().userDate.value = new Date(date).toISOString().slice(0, 23);
    this.targetDate = date;
  }

  timeMath() {
    const time = Date.parse(this.targetDate) - new Date();

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {
      days,
      hours,
      mins,
      secs,
    };
  }

  refs() {
    return {
      userDate: document.querySelector(
        `${this.selector} input[type="datetime-local"]`,
      ),
      day: document.querySelector(`${this.selector} span[data-value="days"]`),
      hour: document.querySelector(`${this.selector} span[data-value="hours"]`),
      min: document.querySelector(`${this.selector} span[data-value="mins"]`),
      sec: document.querySelector(`${this.selector} span[data-value="secs"]`),
    };
  }

  start() {
    const refs = this.refs();
    refs.userDate.addEventListener('change', event => {
      this.newDate = event.target.value;
    });

    this.ingervalId = setInterval(() => {
      refs.day.textContent = this.timeMath().days;
      refs.hour.textContent = this.timeMath().hours;
      refs.min.textContent = this.timeMath().mins;
      refs.sec.textContent = this.timeMath().secs;
    }, 1000);
  }

  stop() {
    clearInterval(this.ingervalId);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Feb 27, 2021'),
});

timer1.start();
timer2.start();

timer1.newDate = new Date(2020, 11, 6, 7, 0);
timer2.newDate = new Date('2020-08-27T06:03:00.000');
