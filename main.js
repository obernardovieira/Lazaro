var inquirer = require('inquirer');
var exec = require('exec-sh');

var appData = {
	'tst_auto':
	[
		{
			'name': 'fe',
			'ip': '10.10',
			'user': 'myuuser',
			'password': 'pass'
		}, 
		{
			'name': 'be',
			'ip': '10.20',
			'user': 'myuuser',
			'password': 'pass'
		}
	],
	'dev':
	[
		{
			'name': 'fe',
			'ip': '20.10',
			'user': 'myuuser',
			'password': 'pass'
		},
		{
			'name': 'be',
			'ip': '20.20',
			'user': 'myuuser',
			'password': 'pass'
		}
	]
}



inquirer.prompt({
	type: 'list',
	name: 'environment',
	message: 'Which environment?',
	choices: () => {
		var groups = []
		for(var group in appData) {
			groups.push(group)
		}
		return groups
	}
}).then(answers => {

	var actualEnvironment = answers.environment
	var questionServer = {
		type: 'list',
		name: 'server',
		message: 'Which server?',
		choices: () => {
			var servers = []
			appData[answers.environment].forEach(arrayItem => {
				servers.push(arrayItem.name)
			})
			return servers
		}
	}

	inquirer.prompt([questionServer]).then(answers => {

		var serverInfo
		appData[actualEnvironment].forEach(arrayItem => {
			if(arrayItem.name == answers.server) {
				serverInfo = arrayItem
				return
			}
		})

		exec('ssh ' + serverInfo.user + '@' + serverInfo.ip, err => {
			if (err) {
				console.log('Exit code: ', err.code)
				return
			}
		})
	})
})
