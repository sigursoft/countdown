const momentos = (text) => {
  document.querySelector('.momentos').textContent = text;
};

const deadline = moment("2019-09-01");
momentos(deadline.fromNow());

const diffInDays = deadline.diff(moment(), 'days');
const countdown = new CountDownClock(diffInDays, 'days');
countdown.start();
