// NOTES:

//MAPPING NAZIARRAY IS NOT CURRENTLY WORKING, ONLY MAPS THE FIRST ITEM IN INDEX.
//If then statement is not currently working, says .json is not a function.



  //****************GLOBAL VARIABLES****************\\

  var arr = [];
  var url1 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=Holocaust&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783703';
  var url2 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=Hitler&callback=svc_search_v2_articlesearch&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783704';
  var url3 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=nazi&callback=svc_search_v2_articlesearch&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783704';


  //********NAZI VARIABLES***************\\
  var goebbels = new Nazi ('Joseph', 'Goebbels', 'Minister of Propaganda');
  var hitler = new Nazi ('Adolf', 'Hitler', null, 'Adolf Hitler was an Austrian-born German politician who was the leader of the Nazi Party (NSDAP), Chancellor of Germany from 1933 to 1945, and Führer ("leader") of Nazi Germany from 1934 to 1945. He was effectively dictator of Nazi Germany, and was a central figure of World War II in Europe and the Holocaust.');
  var himmler = new Nazi ('Heinrich', 'Himmler', 'Architect of Holocaust');
  var eichmann = new Nazi ('Adolf', 'Eichmann', 'Organized deporation of Jewish peoples to Ghettos.')
  var holocaust = new eventNazi ('Holocaust', 'The Holocaust, also known as the Shoah, was a genocide in which approximately six million Jews were killed by Adolf Hitler\'s Nazi regime and its collaborators. Some historians use a definition of the Holocaust that includes the additional five million non-Jewish victims of Nazi mass murders, bringing the total to approximately eleven million. Killings took place throughout Nazi Germany and German-occupied territories.')
  var auschiwitz = new placeNazi ('Auschiwitz', 'A Nazi concentration camp located in Poland where 1.1 million prisoners were killed.')
  //Place people/events/places in this array. Eventually should populate automatically via constructor.
  var nazi = new eventNazi ('Nazi', 'National Socialism, more commonly known as Nazism, is the ideology and practice associated with the 20th-century German Nazi Party and Nazi state as well as other far-right groups. Usually characterized as a form of fascism that incorporates scientific racism and antisemitism, Nazism developed out of the influences of Pan-Germanism, the Völkisch German nationalist movement, and the anti-communist Freikorps paramilitary groups that emerged during the Weimar Republic after German defeat in World War I.')


//**********HELPER FUNCTIONS********\\
//Finds the current date and converts it into a string that is takable by the NYT Search API

  //*******Creates Nazi or related term***//
  function Nazi (firstName, lastName, img, naziBio) {
    this.nazi = firstName + " " + lastName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.img = img;
    //Possibly pull Bio from wikipedia as stretch
    this.naziBio = naziBio;
    this.naziKeyWord = lastName;
      }
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
    this.naziKeyWord = place;
  }

  //  //**************Set Filters ********\\\
  // var nytLink = "http://api.nytimes.com/svc/search/v2/articlesearch.jsonp?q="
  // //Set Desk Filter
  // var nytCallback = "&callback=svc_search_v2_articlesearch"
  // var nytDeskFilter = '&fq=news_desk:("Politics")';
  // //Find Date
  // var nytAPIKey = "&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911";
  // var naziKeyarr = naziArr.naziKeyWord;

  var date = new Date();
  var currentDay = date.getDate();
  var currentMonth = date.getMonth();
  var currentYear = date.getFullYear();
  // var recentDay, recentMonth, recentYear;

  // var totalDate = currentYear.toString() + "0"+ currentMonth.toString() + "0" +currentDay.toString();
  // var nytDateFilter = '&begin_date=' + totalDate;

  // var testDate = "&begin_date=20150101";


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
    $('#counter').css('color', 'red')
  }
}

      var naziHit = [];

  window.svc_search_v2_articlesearch = function (data) {}

  function makeAjax(url) {
    $.ajax({
      url: url,
      method: "GET",
      dataType: 'jsonp',
      jsonpCallback: 'svc_search_v2_articlesearch'
    })
    .done(function(data){
      var naziHit = data.response.docs
      arr = naziHit;
      // arr = arr.concat(naziHit)
      getNewest(arr);
      DaysSinceHit(arr);
      godwinPopulate(arr);
  });
}
function unique (arr){
  for (var i=0; i <arr.length; i++) {
    for (var j=0; j<arr.length;j++) {
      if (arr[i].pub_date === arr[j].pub_date && i !== j)
        {arr.splice(j, 1)}
    }
  }
}

$(document).ready( function() {
$('#naziButton').on('click', function ()
  { $("#first").empty();
    makeAjax(url3);
    $('#topic').text('Nazis');
    $('#intro').text(nazi.eventDesc);
    console.log('buttontest', diffDays)

  });
$('#hitlerButton').on('click', function ()
  { $("#first").empty();
    makeAjax(url2);
    $('#topic').text('Adolf Hitler');
    $('#intro').text(hitler.naziBio);
  });
$('#holocaustButton').on('click', function ()
  { $("#first").empty();
    makeAjax(url1);
   $('#topic').text('Holocaust');
   $('#intro').text(holocaust.eventDesc)
  });

});

function godwinPopulate (arr) {
recentPop(arr);
   for (var i=1; i < arr.length; i++ ) {
    var article = arr[i];
    var artLink = article["web_url"];
    var artAbstract = ("<p id='nytText'>" + article['snippet'] + "</p>");
    var artHeadline = "<h4 class='text-center' id='nytHeadline'><a href='" + artLink + "''>" + article["headline"]["main"] + "</a></h4>";
    var artPubDate = '<p id="pub_date" class="text-center">'+ article["pub_date"].substring(0,10) + '</p>';
    var artimg = "<img src='https://static01.nyt.com/" + article["multimedia"][0]["url"] + "' alt='article image' height='270px' width='600px'>";
    var $fullset= $(
          "<div class='col-xs-12 col-sm-6 col-md-3' style='height: 500px'>" +
            "<div class='thumbnail'>" +
              artimg +
                "<div class='caption'>" + artHeadline + artPubDate + artAbstract +
                  "<p class='text-center' id='pols'>" +
                    "<a href='plaid.com'>Plaid, Joey; </a>" + "<a href='Spotty.com'>Spotty, Eric.</a>" + "</p></div>" +"</div></div>");
    $('#first').append($fullset);
  }
}

function getNewest (arr) {
    var newest = new Object();
    newest.pub_date = '1900';
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].pub_date > newest.pub_date) {
            newest = arr[i];
        }
    };
    arr[0] = newest;
    console.log(newest.pub_date);
}

function recentPop(arr) {
    var article = arr[0];
    var artLink = article["web_url"];
    var artAbstract = ("<p id='nytText'>" + article['snippet'] + "</p>");
    var artHeadline = "<h4 class='text-center' id='nytHeadline'><a href='" + artLink + "''>" + article["headline"]["main"] + "</a></h4>";
    var artPubDate = '<p id="pub_date" class="text-center">'+ article["pub_date"].substring(0,10) + '</p>';
    var artimg = "<img src='https://static01.nyt.com/" + article["multimedia"][0]["url"] + "' alt='article image' height='270px' width='600px'>";

    var $recent= $(
          "<div class='col-xs-12 col-sm-6 col-md-3' style='height: 500px'>" +
            "<div class='thumbnail' style='border: 1px solid red'>" +
              "<h4 class='text-center' style='color:red'>Most Recent</h4>"+
              artimg +
                "<div class='caption'>" + artHeadline + artPubDate + artAbstract +
                  "<p class='text-center' id='pols'>" +
                    "<a href='plaid.com'>Plaid, Joey; </a>" + "<a href='Spotty.com'>Spotty, Eric.</a>" + "</p></div>" +"</div></div>");
    $('#first').append($recent);
  }


//Preliminary Search
//1)Set up a looping Ajax request.

//2) On each loop passes a keyword from the naziArr array (naziArr[i].naziKeyWord) into the search url and run the AJAX request.

//3)Within the Ajax request set up this if statement: if (data["response"]["meta"]["hits"] !== 0) { naziHit.push(naziArr[i]) }

//4 ) if at the end of the prelimary search naziHit.length ===0, then program ends and counter goes up one.

//5 NEW) If there is a hit, push the json object into an array.

//************Secondary Search
// Originally the idea was to take the naziHit array, and rerun it through the NYT ajax request with keywords from the Politican List API. This was dumb. Instead just hold onto the JSON hits from search 1 and send the Politican List searching through those. Obviously.

//


