
var date = new Date();
  // var currentDay = date.getDate();
  // var currentMonth = date.getMonth();
  // var currentYear = date.getFullYear();

function DaysSinceHit (arr){

  var oneDay = 24*60*60*1000; // hours*minutes*seconds*millisecondsvar date = new Date();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth();
  var currentYear = date.getFullYear();
  var recentDay, recentMonth, recentYear;
  recentYear = parseInt(arr[0].pub_date.substring(0,4));
  recentMonth = parseInt(arr[0].pub_date.substring(5,7))-1;
  recentDay = parseInt(arr[0].pub_date.substring(8,10));

  var firstDate = new Date(recentYear,recentMonth,recentDay);
  var secondDate = new Date(currentYear,currentMonth,currentDay);

  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  console.log('RecentDate: ',firstDate);
  console.log(diffDays);
  $('#counter').text(diffDays);
  if (diffDays === 0) {
    $('#counter').css('color', 'red');
  }
}