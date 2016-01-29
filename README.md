DAN KLEIN PROJECT PROPOSAL: GODWIN IS DEAD.


##Introduction

The original concept for this site was a single use tracker of politian instances of Godwin's Law.

Godwin's Law States that on a long enough timeline of an argument, the chance of someone evoking Hitler increases to 1.0. The correlary is that once Hitler is evoked the argument ends and the evoker loses the argument.

My project will find instances in the New York Times of Politicians evoking the Holocaust and print a synopsis of the article, and the offending politicians name, political affiliation, office and phone number.



#####Primary Functionality####

      ####GET REQUEST AND API####

My project will take NEW YORK TIMES API and pass into it the current date and make two GET requests made up of TWO PARAMETERS of specific key words.

The first parameter will come from an an object of particular Holocaust and Nazi keywords with descriptions.

If that search finds a result tripped, it will run a second GET Request made up of the triggering word in addition to running through the FEC API of Federal Elected Officials.

The reason for the first step is to limit the number of required calls. The NYTIMES API limits calls to 5000 a day.

    ####RESULT####

Upon receiving a succesful call, it will append to the site the Politicans Name, Afilliation, Office and Phone Number.

We will also append a brief synopsis with the link to the original article.

A daily counter since last time a politican evoked the Holocaust will reset.

Add the offender to a database object that the User can search by both the politician and the subject.

Finally (And this is trickier) it will freeze searches for the offending politician for three days to prevent their being caught up in lagging or follow up articles. This will be more importance if we add additional NEWS APIs.


####SECONDARY GOALS####

1) A third NYT call with a wider date range finds past instances and prints them below the original with dates.

2) Add other News APIs, like the Associated Press and Reuters.

3) Find API that can expand search to State and local officials.












