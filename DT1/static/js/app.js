var SCOREAPP = SCOREAPP || {};

(function () {
	// Data objecten
	SCOREAPP.gamepage = {
		game: [
			{
				score: 1,
				team1: "Boomsquad",
				team1Score: 1,
				team2Score: 2,
				team2: "Burning Snow",
				
			}, 
			{
				score: 2,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score: 0
			},
			{ 
				score: 3,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 4,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 5,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 6,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 7,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 8,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 9,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 10,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 11,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 12,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 13,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 14,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 15,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 16,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 17,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 18,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 19,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 20,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 21,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 22,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			},
			{ 
				score: 23,
				team1: "Boomsquad",
				team1Score: 2,
				team2: "Burning Snow",
				team2Score:  0
			}

		]
		/*
		[
				{ score: "1", team1: "Boomsquad", team1Score: "1", team2: "Burning Snow", team2Score: "0"},
			    { score: "2", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "0"},
			    { score: "3", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "1"},
			    { score: "4", team1: "Boomsquad", team1Score: "2", team2: "Burning Snow", team2Score: "2"},
			    { score: "5", team1: "Boomsquad", team1Score: "3", team2: "Burning Snow", team2Score: "2"},
			    { score: "6", team1: "Boomsquad", team1Score: "4", team2: "Burning Snow", team2Score: "2"},
			    { score: "7", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "2"},
			    { score: "8", team1: "Boomsquad", team1Score: "5", team2: "Burning Snow", team2Score: "3"},
			    { score: "9", team1: "Boomsquad", team1Score: "6", team2: "Burning Snow", team2Score: "3"},
			    { score: "10", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "3"},
			    { score: "11", team1: "Boomsquad", team1Score: "7", team2: "Burning Snow", team2Score: "4"},
			    { score: "12", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "4"},
			    { score: "13", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "5"},
			    { score: "14", team1: "Boomsquad", team1Score: "8", team2: "Burning Snow", team2Score: "6"},
			    { score: "15", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "6"},
			    { score: "16", team1: "Boomsquad", team1Score: "9", team2: "Burning Snow", team2Score: "7"},
			    { score: "17", team1: "Boomsquad", team1Score: "10", team2: "Burning Snow", team2Score: "7"},
			    { score: "18", team1: "Boomsquad", team1Score: "11", team2: "Burning Snow", team2Score: "7"},
			    { score: "19", team1: "Boomsquad", team1Score: "12", team2: "Burning Snow", team2Score: "7"},
			    { score: "20", team1: "Boomsquad", team1Score: "13", team2: "Burning Snow", team2Score: "7"},
			    { score: "21", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "7"},
			    { score: "22", team1: "Boomsquad", team1Score: "14", team2: "Burning Snow", team2Score: "8"},
			    { score: "23", team1: "Boomsquad", team1Score: "15", team2: "Burning Snow", team2Score: "8"}
		
		]*/
	};

	SCOREAPP.rankingpage = {
		ranking: [
			{ 
				team: "Chasing",
				Win: "2",
				Lost: "2",
				Sw: "7",
				Sl: "9",
				Pw: "35",
				Pl: "39"
			},
		   	{
		    	team: "Boomsquad", 
		    	Win: "2",
		    	Lost: "2",
		    	Sw: "9",
		    	Sl: "8",
		    	Pw: "36",
		    	Pl: "34"
		    },
		    { 
		    	team: "Burning Snow",
		    	Win: "3",
		    	Lost: "1",
		    	Sw: "11",
		    	Sl: "4", 
		    	Pw: "36", 
		    	Pl: "23"
		    },
		    { 
		    	team: "Beast Amsterdam", 
		    	Win: "2", 
		    	Lost: "2", 
		    	Sw: "6", 
		    	Sl: "8", 
		    	Pw: "30", 
		    	Pl: "34"
		    },
		    { 
		    	team: "Amsterdam Money Gang", 
		    	Win: "1", 
		    	Lost: "3", 
		    	Sw: "6", 
		    	Sl: "10", 
		    	Pw: "30", 
		    	Pl: "37"
		    }
    	]
	};


	SCOREAPP.schedulepage = {
		schedule:[
			{ 
				date: "Monday, 9:00am", 
				team1: "Chasing", 
				team1Score: "13", 
				team2: "Amsterdam Money Gang", 
				team2Score: "9"
			},
		    { 
		    	date: "Monday, 9:00am", 
		    	team1: "Boomsquad", 
		    	team1Score: "15", 
		    	team2: "Beast Amsterdam", 
		    	team2Score: "11"
		    },
		    { 
		    	date: "Monday, 10:00am", 
		    	team1: "Beast Amsterdam", 
		    	team1Score: "14", 
		    	team2: "Amsterdam Money Gang", 
		    	team2Score: "12"
		    },
		    { 
		    	date: "Monday, 10:00am", 
		    	team1: "Chasing", 
		    	team1Score: "5", 
		    	team2: "Burning Snow", 
		    	team2Score: "15"
		    },
		    { 
		    	date: "Monday, 11:00am", 
		    	team1: "Boomsquad", 
		    	team1Score: "11", 
		    	team2: "Amsterdam Money Gang", 
		    	team2Score: "15"
		    },    
		    { 
		    	date: "Monday, 11:00am", 
		    	team1: "Burning Snow", 
		    	team1Score: "15", 
		    	team2: "Beast Amsterdam", 
		    	team2Score: "6"
		    },
		    { 
		    	date: "Monday, 12:00pm", 
		    	team1: "Chasing", 
		    	team1Score: "8", 
		    	team2: "Beast Amsterdam", 
		    	team2Score: "15"
		    },
		    { 
		    	date: "Monday, 12:00pm", 
		    	team1: "Boomsquad", 
		    	team1Score: "15", 
		    	team2: "Burning Snow", 
		    	team2Score: "8"
		    },
		    { 
		    	date: "Monday, 1:00pm", 
		    	team1: "Chasing", 
		    	team1Score: "15", 
		    	team2: "Boomsquad", 
		    	team2Score: "14"
		    },
		    { 
		    	date: "Monday, 1:00pm", 
		    	team1: "Burning Snow", 
		    	team1Score: "15", 
		    	team2: "Amsterdam Money Gang", 
		    	team2Score: "11"
		    }
		]
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
				},
			    '/rankingpage': function() {
			    	SCOREAPP.page.render('rankingpage');
			    }, 
			    '/schedulepage': function() {
			    	SCOREAPP.page.render('schedulepage');
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
		}
	}
	// DOM ready
	domready(function () {
		// Kickstart application
		SCOREAPP.controller.init();
	});
	
})();