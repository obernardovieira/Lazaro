const inquirer = require('inquirer');
const exec = require('exec-sh');
const dataSaver = require('./modules/dataSaver');


module.exports = () => {
    const appData = JSON.parse(dataSaver.load());
    inquirer.prompt({
        type: 'list',
        name: 'environment',
        message: 'Which environment?',
        choices: () => {
            const groups = [];
            for (const group in appData) {
                groups.push(group);
            }
            return groups;
        },
    }).then((environment) => {
        const actualEnvironment = environment.environment;
        const questionServer = {
            type: 'list',
            name: 'server',
            message: 'Which server?',
            choices: () => {
                const servers = [];
                appData[environment.environment].forEach((arrayItem) => {
                    servers.push(arrayItem.name);
                });
                return servers;
            },
        };

        inquirer.prompt([questionServer]).then((server) => {
            let serverInfo;
            appData[actualEnvironment].forEach((arrayItem) => {
                if (arrayItem.name === server.server) {
                    serverInfo = arrayItem;
                }
            });

            exec(`ssh ${serverInfo.user}@${serverInfo.ip}`, (err) => {
                if (err) {
                    console.log('Exit code: ', err.code);
                }
            });
        });
    });
};
