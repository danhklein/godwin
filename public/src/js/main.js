// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
//****************GLOBAL VARIABLES****************\\



//********NAZI VARIABLES***************\\


var goebbels = new Nazi ('Joseph', 'Goebbels', 'Minister of Propaganda');
var hitler = new Nazi ('Adolph', 'Hitler', 'Dictator of Germany');
var himmler = new Nazi ('Heinrich', 'Himmler', 'Architect of Holocaust');
//Place people/events/places in this array. Eventually should populate automatically via constructor.

var naziArr = [goebbels, hitler, himmler];


//**********HELPER FUNCTIONS********\\
//Finds the current date and converts it into a string that is takable by the NYT Search API
function findDate() {
  var date = new Date();
var currentDay = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentYear = date.getFullYear();
var totalDate = currentYear.toString() + currentMonth.toString() + currentDay.toString();
}

  //*******Creates Nazi or related term;
  function Nazi (firstName, lastName, naziBio) {
this.nazi = firstName + " " + lastName;
this.firstName = firstName;
this.lastName = lastName;
//Possibly pull Bio from wikipedia as stretch
this.naziBio = naziBio;
this.naziKeyWord = lastName

  };
//********Creates Nazi related event
  function eventNazi (eventName, eventDesc) {
    this.eventName = eventName;
    //Possibly pull event description from wikipedia.
    this.eventDesc = eventDesc;
    this.naziKeyWord = eventName;
  }
//********Creates Nazi related place
  function placeNazi (place, placeDesc) {
    this.place = place;
    this.placeDesc = placeDesc;
  }
  //*********CREATE PRIMARY NYT SEARCH URL*****\\\\
  var nytUrl1 = nytLink + nytQuery1 + nytDeskFilter + nytDateFilter + nytAPIKey;
  var nytLink = "http://api.nytimes.com/svc/search/v2/articlesearch.json?"
  var nytQuery1;
  var nytDeskFilter = '&fq=news_desk:("Politics")';
  var nytDateFilter = '&begin_date=' + totalDate;

});