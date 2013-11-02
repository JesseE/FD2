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
			    //render gamepage    	
			    SCOREAPP.page.render('gamepage');
			    $('#ajaxloader').show();
			    	//get data
			    	SCOREAPP.appGameData = microAjax("https://api.leaguevine.com/v1/games/?offset=20&season_id=20167&limit=20&access_token=82996312dc", 
						function(data){

							var dataG = JSON.parse(data);
							var gameData = [];
							var gameDataId = [];
							var gameTeam1Score = [];
							var gameTeam1ID =[];
							for (var i = dataG.objects.length - 1; i >= 0; i--) {
								
								gameData.push(dataG.objects[i]);
								gameDataId.push(dataG.objects[i].id);
								gameTeam1Score.push(dataG.objects[i].team_1_score);	
								gameTeam1Score.push(dataG.objects[i].team_1_id);	

							}
							console.log(gameTeam1Score);
							console.log(gameData);
							console.log(gameTeam1ID);
							//view	
							var gameTemplate = '{{#gameData}}<ul class="gamelist"><li class="gameID">{{id}}</li>{{#team_1}}<li><h5>{{name}}</h5></li>{{/team_1}}<li><h3>{{team_1_score}}</h3></li><li><h2>-</h2></li><li><h3>{{team_2_score}}</h3></li>{{#team_2}}<li><h5>{{name}}</h5></li>{{/team_2}}</ul>{{/gameData}}';

							//apply to html
							var html = Mustache.to_html(gameTemplate, {gameData: gameData,gameDataId : gameDataId});
							$('#gametemplate').html(html);	
							$('#ajaxloader').hide();
							$('.gameID').hide();
							console.log(gameDataId);	

								$('.gamelist').click(function(e){
									e.preventDefault();
									//select the object
									var gamesDataID = [];
									var team1score = [];
									console.log()
									for (var i = gameData.length - 1; i >= 0; i--) {
											team1score.push(gameData[i].team_1_score);	
											gamesDataID.push(gameData[i].id);						
									}					
									var gameid = this.firstChild.innerHTML;
								
									//if gameid of selected object is equal to gamedataid show only the selected data
									
									var gameObjId = JSON.parse(gameid);
									
									console.log(gameObjId);									

									var gameidtype = $.type(gameObjId);
									
									if(this.gameObjId === gameDataId[i]){
										$(this).addClass('active');
										var notactive = $('.gamelist').not('active');								 	
										$('#updatescore').show();
										$('#back').show();
										$('.gamelist').hide();
										$('.active').show();
									}

									$('#back').click(function(e){
										e.preventDefault();
										if($('.gamelist').hasClass('active')){
											$('.gamelist').removeClass('active');
										}
										$('#updatescore').hide();
										$('#back').hide();
										$('.gamelist').show();
									});
									

									//select object out of array
									var access_number = '82996312dc';
        							var access_token = '&access_token=' + access_number;	  							
        							
									
									$('button.updateTeamScore').click(function(e){
										e.preventDefault();
										
										$.ajax({
											dataType: "json",
											type: "POST",
											url: "https://api.leaguevine.com/v1/game_scores/",											
											headers:{
												Authorization: 'bearer ' + access_number
											},
											contentType: "application/json",

											data:JSON.stringify({	
												game_id : gameObjId,	
												team_1_score: $('input.updateTeam1Score').val(),
												team_2_score: $('input.updateTeam2Score').val(),
												is_final: "true"												
												
											}),
        									
											success:function(){
												 window.location.reload();
											}
																				
									});
									});
									
								});							
						});			    	
				},
			    '/rankingpage': function() {
			    //render rankingpage
			    SCOREAPP.page.render('rankingpage');
			    $('#ajaxloader').show();
			    	//get data					
			    	SCOREAPP.appRankingData = microAjax("https://api.leaguevine.com/v1/pools/19222/",
						function(data){
							var dataR = JSON.parse(data);
							var rankingData=[];
							
							for (var i = dataR.standings.length - 1; i >= 0; i--) {
									rankingData.push(dataR.standings[i]);								
							}
							//view
							var rankingTemplate = 
							'{{#rankingData}}<ul class="rankinglist">{{#team}}<li>{{name}}</li>{{/team}}<li>{{points_scored}}</li><li>{{points_allowed}}</li><li>{{losses}}</li><li>{{games_played}}</li></ul>{{/rankingData}}';
							//apply to html
							var html = Mustache.to_html(rankingTemplate, {rankingData: rankingData});
							$('#rankingtemplate').html(html);	
							$('#ajaxloader').hide();							
					});	
				},	 
			    '/schedulepage': function() {
			    //render schedule page
			    SCOREAPP.page.render('schedulepage');
			    $('#ajaxloader').show();
			    	//get data
			    	SCOREAPP.appScheduleData= microAjax("https://api.leaguevine.com/v1/pools/?tournament_id=19389&access_token=5397f697c0",
						function(data){
							var dataS = JSON.parse(data);
							var scheduleData = [];
								
								for (var i = dataS.objects.length - 1; i >= 0; i--) {
									scheduleData.push(dataS.objects[i]);									
								}
								console.log(scheduleData);
							//view	
							var scheduleTemplate = 
							'{{#scheduleData}}<ul class="schedulelist"><li>{{name}}</li>{{#standings}}{{#team}}<li>{{name}}</li>{{/team}}{{/standings}}</ul>{{/scheduleData}}';
							//apply to html 	
							var html = Mustache.to_html(scheduleTemplate, {scheduleData : scheduleData});
							$('#scheduletemplate').html(html);
							$('#ajaxloader').hide();
						});
			    },		   
			    '/*': function() {
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