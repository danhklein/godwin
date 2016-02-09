//****************GLOBAL VARIABLES****************\\

  var arr = [];
  var url1 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=Holocaust&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783703';
  var url2 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=Hitler&callback=svc_search_v2_articlesearch&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783704';
  var url3 = '//api.nytimes.com/svc/search/v2/articlesearch.jsonp?q=nazi&callback=svc_search_v2_articlesearch&fq=news_desk:(%22Politics%22)&begin_date=20150101&api-key=534e57e32a30382b3b6da874e8f42d3a:5:71918911&callback=svc_search_v2_articlesearch&_=1454438783704';


  //********NAZI VARIABLES***************\\
  var goebbels = new Nazi ('Joseph', 'Goebbels', 'Minister of Propaganda');
  var hitler = new Nazi ('Adolf', 'Hitler', null, 'Adolf Hitler was an Austrian-born German politician who was the leader of the Nazi Party (NSDAP), Chancellor of Germany from 1933 to 1945, and Führer ("leader") of Nazi Germany from 1934 to 1945. He was effectively dictator of Nazi Germany, and was a central figure of World War II in Europe and the Holocaust.');
  var himmler = new Nazi ('Heinrich', 'Himmler', 'Heinrich Luitpold Himmler (7 October 1900 – 23 May 1945) was Reichsführer of the Schutzstaffel (Protection Squadron; SS), and a leading member of the Nazi Party (NSDAP) of Nazi Germany. Nazi leader Adolf Hitler briefly appointed him a military commander and later Commander of the Replacement (Home) Army and General Plenipotentiary for the administration of the entire Third Reich (Generalbevollmächtigter für die Verwaltung). Himmler was one of the most powerful men in Nazi Germany and one of the people most directly responsible for the Holocaust.');
  var eichmann = new Nazi ('Adolf', 'Eichmann', 'Organized deporation of Jewish peoples to Ghettos.');
  var holocaust = new eventNazi ('Holocaust', 'The Holocaust, also known as the Shoah, was a genocide in which approximately six million Jews were killed by Adolf Hitler\'s Nazi regime and its collaborators. Some historians use a definition of the Holocaust that includes the additional five million non-Jewish victims of Nazi mass murders, bringing the total to approximately eleven million. Killings took place throughout Nazi Germany and German-occupied territories.');
  var auschiwitz = new placeNazi ('Auschiwitz', 'A Nazi concentration camp located in Poland where 1.1 million prisoners were killed.');
  //Place people/events/places in this array. Eventually should populate automatically via constructor.
  var nazi = new eventNazi ('Nazi', 'National Socialism, more commonly known as Nazism, is the ideology and practice associated with the 20th-century German Nazi Party and Nazi state as well as other far-right groups. Usually characterized as a form of fascism that incorporates scientific racism and antisemitism, Nazism developed out of the influences of Pan-Germanism, the Völkisch German nationalist movement, and the anti-communist Freikorps paramilitary groups that emerged during the Weimar Republic after German defeat in World War I.');
