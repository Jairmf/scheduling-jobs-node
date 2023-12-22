const schedule = require('node-schedule');

// Particular date and time
// const date = new Date(2019, 11, 31, 23, 59, 59);
// schedule.scheduleJob(date, function(){
//     console.log('Happy new year!');
// });

// Recurring schedule
const rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = 2;
// rule.hour = 1;
// rule.minute = 30;
// rule.second = 3;
// rule.millisecond = 10;
const ruleString = '*/2 * * * * *';
const job = schedule.scheduleJob(ruleString, function(){
    console.log('Today is Tuesday!');
    // job.cancel();
});
