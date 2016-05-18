// var naziVariables = require('./nazi');
// NOTES:

//MAPPING NAZIARRAY IS NOT CURRENTLY WORKING, ONLY MAPS THE FIRST ITEM IN INDEX.
//If then statement is not currently working, says .json is not a function.

//****************GLOBAL VARIABLES****************\\

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
      var naziHit = data.response.docs;
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
$('#fascismButton').on('click', function ()
  { $("#first").empty();
    makeAjax(url4);
    $('#topic').text('Fascism');
    $('#intro').text(fascism.eventDesc);
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
    // var artimg = "<img src='https://static01.nyt.com/" + article["multimedia"][0]["url"] + "' alt='article image' height='270px' width='600px'>";
    var $fullset= $(
          "<div class='col-xs-12 col-sm-6 col-md-3' style='height: 500px'>" +
            "<div class='thumbnail'>" +
              // artimg +
                "<div class='caption'>" + artHeadline + artPubDate + artAbstract +
                  "</div>" +"</div></div>");
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
}

function recentPop(arr) {
    var article = arr[0];
    var artLink = article["web_url"];
    var artAbstract = ("<p id='nytText'>" + article['snippet'] + "</p>");
    var artHeadline = "<h4 class='text-center' id='nytHeadline'><a href='" + artLink + "''>" + article["headline"]["main"] + "</a></h4>";
    var artPubDate = '<p id="pub_date" class="text-center">'+ article["pub_date"].substring(0,10) + '</p>';
    // var artimg = "<img src='https://static01.nyt.com/" + article["multimedia"][0]["url"] + "' alt='article image' height='270px' width='600px'>";

    var $recent= $(
          "<div class='col-xs-12 col-sm-6 col-md-3' style='height: 500px'>" +
            "<div class='thumbnail' style='border: 1px solid red'>" +
              "<h4 class='text-center' style='color:red'>Most Recent</h4>"+
              // artimg +
                "<div class='caption'>" + artHeadline + artPubDate + artAbstract +
                  "</div>" +"</div></div>");
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


