const inquirer = require('inquirer');
const exec = require('exec-sh');
const where = require('lodash.where');
const dataSaver = require('./modules/dataSaver');


module.exports = () => {
    const appData = JSON.parse(dataSaver.load());
    inquirer.prompt({
        type: 'list',
        name: 'environment',
        message: 'Which environment?',
        choices: () => {
            const groups = [];
            appData.forEach((element) => {
                groups.push(element.name);
            });
            return groups;
        },
    }).then((environment) => {
        const actualEnvironment = environment.environment;
        const serversInfo = [];
        const questionServer = {
            type: 'list',
            name: 'server',
            message: 'Which server?',
            choices: () => {
                const serversName = [];
                where(appData, { name: actualEnvironment })[0].items.forEach((arrayItem) => {
                    serversInfo.push({ key: arrayItem.name, value: arrayItem });
                    serversName.push(arrayItem.name);
                });
                return serversName;
            },
        };

        inquirer.prompt([questionServer]).then((server) => {
            const serverInfo = serversInfo.filter(serverF => serverF.key === server.server);
            exec(`ssh ${serverInfo.user}@${serverInfo.ip}`, (err) => {
                if (err) {
                    console.log('Exit code: ', err.code);
                }
            });
        });
    });
};
