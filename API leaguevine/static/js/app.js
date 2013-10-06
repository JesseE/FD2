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
							//console.log(dataG);
							//console.log(dataG.objects[1].team.name);
								for (var i = dataG.objects.length - 1; i >= 0; i--) {
									//console.log(dataG.objects[i].team.name);
									var gameData = dataG.objects[i];
									console.log(gameData);
									var game = $("<tr></tr>"),
									team1Name = $("<td>"+ gameData.team_1.name + "</td>"),
									team1Score = $("<td>"+ gameData.team_1_score + "</td>" + "<td>-</td>"),
									team2Score = $("<td>"+ gameData.team_2_score + "</td>"),
									team2Name = $("<td>"+ gameData.team_2.name + "</td>"),
									addTeam = $("<td>" + "<button class='addteam'></button>" + "</td>");
									game.append(team1Name, team1Score, team2Score, team2Name, addTeam);
									$('#gametable').append(game);
									//console.log(teamName);

								};

						});
				},
			    '/rankingpage': function() {
			    	SCOREAPP.page.render('rankingpage');
			    	SCOREAPP.appRankingData = microAjax("https://api.leaguevine.com/v1/pools/19222/",
						function(data){
							var dataR = JSON.parse(data);
							//console.log(dataR);
							for (var i = dataR.standings.length - 1; i >= 0; i--) {
								var rankingData = dataR.standings[i];
									console.log(rankingData);
								var standings = $("<tr></tr>"),
									lost = $("<td>" + rankingData.losses + "</td>"),
									win = $("<td>" + rankingData.wins + "</td>"),
									pointsAllowed = $("<td>" + rankingData.points_allowed + "</td>"),
									pointsScored = $("<td>" + rankingData.points_scored + "</td>"),
									plusMinus = $("<td>" + rankingData.plus_minus + "</td>"),
									teamName = $("<td>" + rankingData.team.name + "</td>");
									standings.append(teamName, win, lost, pointsScored, pointsAllowed, plusMinus);
									$('#rankingtable').append(standings);		
							};
					});
			    }, 
			    '/schedulepage': function() {
			    	SCOREAPP.page.render('schedulepage');
			    	SCOREAPP.appScheduleData= microAjax("https://api.leaguevine.com/v1/pools/?tournament_id=19389&access_token=5397f697c0",
						function(data){
							var dataS = JSON.parse(data);
								for (var i = dataS.objects.length - 1; i >= 0; i--) {
									var scheduleData = dataS.objects[i];
									console.log(scheduleData);
								};
						});
			    },
			    '/moviepage': function(){
			    	SCOREAPP.page.render('moviepage');
			    },			   
			    '*': function() {
			    	SCOREAPP.page.render('gamepage');
			    }
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
            console.log(route);

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