
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
  $('#counter').text(diffDays);
  if (diffDays === 0) {
    $('#counter').css('color', 'red');
  }
}

//**********HELPER FUNCTIONS********\\
//Finds the current date and converts it into a string that is takable by the NYT Search API



  //  //**************Set Filters ********\\\
  // var nytLink = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q="
  // //Set Desk Filter
  // var nytCallback = "&callback=svc_search_v2_articlesearch"
  // var nytDeskFilter = '&fq=news_desk:("Politics")';
  // //Find Date
  // var nytAPIKey = "&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911";
  // var naziKeyarr = naziArr.naziKeyWord;

  // var date = new Date();
  // var currentDay = date.getDate();
  // var currentMonth = date.getMonth();
  // var currentYear = date.getFullYear();
  // var recentDay, recentMonth, recentYear;

  // var totalDate = currentYear.toString() + "0"+ currentMonth.toString() + "0" +currentDay.toString();
  // var nytDateFilter = '&begin_date=' + totalDate;

  // var testDate = "&begin_date=20150101";


