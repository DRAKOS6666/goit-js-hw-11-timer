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
    this.refs().userDate.addEventListener('change', event => {
      this.newDate = event.target.value;
    })  

    this.ingervalId = setInterval(() => {
      this.refs().day.textContent = this.timeMath().days;
      this.refs().hour.textContent = this.timeMath().hours;
      this.refs().min.textContent = this.timeMath().mins;
      this.refs().sec.textContent = this.timeMath().secs;
    }, 1000);
  }

  stop() {
    clearInterval(this.ingervalId);
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

setTimeout(timer1.stop(), 5000);