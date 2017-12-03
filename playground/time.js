const moment = require('moment');

const date = moment();
console.log(date.format('MMM Do, YYYY'))

const time = moment();
console.log(time.format('h:mm a'));
console.log(time.format('H:mm a'));