import date from 'date-and-time';

const makeDateString = (created_at) => {
  const createdOn = new Date(created_at);
  const today = new Date();
  const daysGap = parseInt(date.subtract(today, createdOn).toDays());
  let dateString;
  if (daysGap === 0) {
    const hourVal = parseInt(date.subtract(today, createdOn).toHours());
    dateString = `${hourVal} hour${hourVal !== 1 ? 's' : ''} ago`;
  } else if (daysGap === 1) {
    dateString = `yesterday`;
  } else if (daysGap > 1 && daysGap < 30) {
    dateString = `${parseInt(
      date.subtract(today, createdOn).toDays()
    )} days ago`;
  } else if (daysGap > 30) {
    let tempDateArr = createdOn.toString().split(' ');
    let dateStr = `${tempDateArr[2]} ${tempDateArr[1]}`;
    if (today.toString().split(' ')[3] !== tempDateArr[3]) {
      dateStr = `${tempDateArr[2]} ${tempDateArr[1]} ${tempDateArr[3]}`;
    } else {
      dateStr = `${tempDateArr[2]} ${tempDateArr[1]}`;
    }
    if (dateStr[0] === '0') {
      dateStr = dateStr.slice(1);
    }
    dateString = `on ${dateStr} `;
  }
  return dateString;
};

export default makeDateString;
