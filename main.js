var inquirer = require('inquirer');
var exec = require('exec-sh');

var objservers = {'tst_auto':['(10.10) fe', '(12.10) be'], 'dev':['(20.10) fe', '(22.10) be']};


var servers = []
for(var exKey in objservers) {
    servers.push(exKey);
}


inquirer
  .prompt({
    type: 'list',
    name: 'environment',
    message: "Which environment?",
    choices: servers
  })
  .then(answers => {
	console.log(answers.environment)
	
	var question1 = {
		type: 'list',
		name: 'server',
		message: "Which server?",
		choices: objservers[answers.environment]
	}

    inquirer.prompt([question1]).then(answers => {
		console.log(answers.server)

		var str = answers.server;
		var regexp = /\((.*)\)/;
		var matches_array = str.match(regexp)[1]

		console.log(matches_array)

		exec("echo lorem && bash", { cwd: "/home" }, function(err){
			if (err) {
			  console.log("Exit code: ", err.code);
			  return;
			}
		  });
	});
});
