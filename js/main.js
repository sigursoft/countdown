'user strict'

const momentos = (text) => {
  const doc = document
  const momentosEl = doc.querySelector('.momentos')
  momentosEl.textContent = text
}

const deadline = "2019-09-01"

momentos(moment(deadline).fromNow());

const a = moment(deadline);
const b = moment();
const diffInMs = a.diff(b);
const diffInDays = a.diff(b, 'days'); // 1 day

/*
  start countdown
  enter number and format
  days, hours, minutes or seconds
*/
countDownClock(diffInDays, 'days');
