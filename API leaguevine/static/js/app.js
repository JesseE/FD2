var SCOREAPP = SCOREAPP || {};

(function () {
	
SCOREAPP.gamepage = {
		game: {
		}
	};
SCOREAPP.rankingpage = {
		ranking: {
		}

	};
SCOREAPP.schedulepage = {
		schedule: {
		}
	};
SCOREAPP.moviepage = {
		movie: {
		}
	};
	// Controller Init
	SCOREAPP.controller = {
		init: function () {
			// Initialize router
			SCOREAPP.router.init();
		}
	};
	// Router
	SCOREAPP.router = {
		init: function () {
			//routie js finds the correct page by making a function for each page with corresponding page tag 
			//and rendering it
	  		routie({
			    '/gamepage': function() {    	
			    SCOREAPP.page.render('gamepage');
			    	SCOREAPP.appGameData = microAjax("https://api.leaguevine.com/v1/games/?offset=20&season_id=20167&limit=20&access_token=8a50bbad51", 
						function(data){
							var dataG = JSON.parse(data);
							var gameData =[];
							for (var i = dataG.objects.length - 1; i >= 0; i--) {
								gameData.push(dataG.objects[i]);
							}			
								
							var gameTemplate = '{{#gameData}}<ul class="gamelist">{{#team_1}}<li>{{name}}</li>{{/team_1}}<li>{{team_1_score}}</li><li>{{team_2_score}}</li>{{#team_2}}<li>{{name}}</li>{{/team_2}}</ul>{{/gameData}}';
					
							var html = Mustache.to_html(gameTemplate, {gameData: gameData});
							$('#gametemplate').html(html);	
						});
					
				},
			    '/rankingpage': function() {
			    SCOREAPP.page.render('rankingpage');					
			    	SCOREAPP.appRankingData = microAjax("https://api.leaguevine.com/v1/pools/19222/",
						function(data){
							var dataR = JSON.parse(data);
							var rankingData=[];
							
							for (var i = dataR.standings.length - 1; i >= 0; i--) {
									rankingData.push(dataR.standings[i]);								
							}

							var rankingTemplate = 
							'{{#rankingData}}<ul class="rankinglist">{{#team}}<li>{{name}}</li>{{/team}}<li>{{points_scored}}</li><li>{{points_allowed}}</li><li>{{losses}}</li><li>{{games_played}}</li></ul>{{/rankingData}}';

							var html = Mustache.to_html(rankingTemplate, {rankingData: rankingData});
							$('#rankingtemplate').html(html);								
					});	
				},	 
			    '/schedulepage': function() {
			    SCOREAPP.page.render('schedulepage');
			    	SCOREAPP.appScheduleData= microAjax("https://api.leaguevine.com/v1/pools/?tournament_id=19389&access_token=5397f697c0",
						function(data){
							var dataS = JSON.parse(data);
							var scheduleData = [];
								
								for (var i = dataS.objects.length - 1; i >= 0; i--) {
									scheduleData.push(dataS.objects[i]);									
								}
								console.log(scheduleData);
							var scheduleTemplate = 
							'{{#scheduleData}}<ul class="schedulelist"><li>{{name}}</li>{{#standings}}{{#team}}<li>{{name}}</li>{{/team}}{{/standings}}</ul>{{/scheduleData}}';

							var html = Mustache.to_html(scheduleTemplate, {scheduleData : scheduleData});
							$('#scheduletemplate').html(html);
						});
			    },
			    '/moviepage': function(){
			    	SCOREAPP.page.render('moviepage');
			    }			   
			    /*'*': function() {
			    	SCOREAPP.page.render('gamepage');
			    }*/
			});
		},
		//if there is a page change select te corresponding route and data-bind to display on the page 
		change: function () {
			//slice creates new array
            var route = window.location.hash.slice(2),

            //selecting the section element
                sections = qwery('section'),
            //selecting the data route attribute and adding the route like gamepage to it
                section = qwery('[data-route=' + route + ']')[0];
            //selecting the data bind attribute and adding the route corresponding to the page
                bind = qwery ('[data-bind= ' + route + ']')[0];
            // Show active section, hide all other
            if (section) {
            	//for each section that remove class active
            	for (var i=0; i < sections.length; i++){
            		sections[i].classList.remove('active');

            	}
            	//else add class active
            	section.classList.add('active');

            }
            // Default route
            if (!route) {
            	sections[0].classList.add('active');
            }
         

		}
	};
	// Pages
	SCOREAPP.page = {
		render: function (route) {
			// http://javascriptweblog.wordpress.com/2010/04/19/how-evil-is-eval/
			//var data = eval('SCOREAPP.'+route);
			var data = SCOREAPP[route];
			
			//selecting the corresponding route
			Transparency.render(qwery('[data-route='+route+']')[0], data);
			
			//if there is a change in route render the route
			SCOREAPP.router.change();
			//console.log(data);
		}

	}
	// DOM ready
	domready(function () {
		// Kickstart application
		SCOREAPP.controller.init();
	});
	
})();