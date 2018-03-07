var inquirer = require('inquirer');
var exec = require('exec-sh');

var objservers = {
	'tst_auto':
	[
		'(10.10) fe', 
		'(12.10) be'
	],
	'dev':
	[
		'(20.10) fe', 
		'(22.10) be'
	]
};



inquirer.prompt({
	type: 'list',
	name: 'environment',
	message: "Which environment?",
	choices: () => {
		var servers = []
		for(var exKey in objservers) {
			servers.push(exKey);
		}
		return servers
	}
}).then(answers => {

	var questionServer = {
		type: 'list',
		name: 'server',
		message: "Which server?",
		choices: objservers[answers.environment]
	}

	inquirer.prompt([questionServer]).then(answers => {

		var str = answers.server;
		var regexp = /\((.*)\)/;
		var matches_array = str.match(regexp)[1]

		exec("ssh user@" + matches_array, function(err) {
			if (err) {
				console.log("Exit code: ", err.code);
				return;
			}
		});
	});
});
