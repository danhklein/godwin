// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
//****************GLOBAL VARIABLES****************\\



//********NAZI VARIABLES***************\\
  var nytDateFilter = '';
  var naziQuery

  var goebbels = new Nazi ('Joseph', 'Goebbels', 'Minister of Propaganda');
  var hitler = new Nazi ('Adolf', 'Hitler', 'Dictator of Germany');
  var himmler = new Nazi ('Heinrich', 'Himmler', 'Architect of Holocaust');
  //Place people/events/places in this array. Eventually should populate automatically via constructor.

  var naziArr = [goebbels, hitler, himmler];


//**********HELPER FUNCTIONS********\\
//Finds the current date and converts it into a string that is takable by the NYT Search API




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

   //**************Set Filters ********\\\
  var nytLink = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="
  //Set Desk Filter
  var nytDeskFilter = '&fq=news_desk:("Politics")';
  //Find Date
  var date = new Date();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth() + 1;
  var currentYear = date.getFullYear();
  var totalDate = currentYear.toString() + currentMonth.toString() + currentDay.toString();
  var nytDateFilter = '&begin_date=' + totalDate;
  });

naziArr.map(function(naziKey) { $.ajax({
  url: nytLink + naziKey + nytDeskFilter + nytDateFilter + nytAPIKey,
  method: "GET",
    success: function(date) {
        if !!(data["response"]["meta"]["hits"]) {
         naziHit.push(data["response"]["docs"])
         counter = 0;
        }
        else {
          counter++;
        }
      })
    )}
  });
});

//Preliminary Search
//1)Set up a looping Ajax request.

//2) On each loop passes a keyword from the naziArr array (naziArr[i].naziKeyWord) into the search url and run the AJAX request.

//3)Within the Ajax request set up this if statement: if (data["response"]["meta"]["hits"] !== 0) { naziHit.push(naziArr[i]) }

//4 ) if at the end of the prelimary search naziHit.length ===0, then program ends and counter goes up one.

//5 NEW) If there is a hit, push the json object into an array.

//************Secondary Search
// Originally the idea was to take the naziHit array, and rerun it through the NYT ajax request with keywords from the Politican List API. This was dumb. Instead just hold onto the JSON hits from search 1 and send the Politican List searching through those. Obviously.

//



