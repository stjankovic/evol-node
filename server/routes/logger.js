/*! *******************************************************
 *
 * evolutility-server :: logger.js
 * Simple formatted console logger.
 *
 * https://github.com/evoluteur/evolutility-server
 * Copyright (c) 2016 Olivier Giulieri
 ********************************************************* */

var consoleLog = true;

module.exports = {

	ascii_art: function(){
		if(consoleLog){
			console.log(
				(
					'  ______          _           _ _ _\n'+
					' |  ____|        | |      /| (_) (_)/|\n'+
					' | |____   _____ | |_   _| |_ _| |_| |_ _   _\n'+
					' |  __\\ \\ / / _ \\| | | | | __| | | | __| | | |\n'+
					' | |___\\ V / (_) | | |_| | |_| | | | |_| |_| |\n'+
					' |______\\_/ \\___/|_|\\__,_|\\__|_|_|_|\\__|\\__, |\n'+
					'         ___  ___ _ ____   _____ _ __    __/ |\n'+
					'  ____  / __|/ _ \\ \'__\\ \\ / / _ \\ \'__|  |___/\n' + 
					' |____| \\__ \\  __/ |   \\ V /  __/ |\n'+
					'        |___/\\___|_|    \\_/ \\___|_|\n\n'+
					new Date()).toString() + '\n'
			);
		}

	},

	 logObject: function(title, req){
		if(consoleLog){
			console.log('\n\n--- '+title+' ---');
			console.log('params = '+JSON.stringify(req.params, null, 2));
			console.log('query = '+JSON.stringify(req.query, null, 2));
			console.log('body = '+JSON.stringify(req.body, null, 2));
		}
	},

	logSQL: function (sql){
		if(consoleLog){
			console.log('sql = '+sql+'\n');
		}
	},

	logError: function(err){
		// TODO:
		
	}

};
