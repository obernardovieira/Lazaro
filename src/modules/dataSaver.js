const fs = require('fs');
const os = require('os');

const fileName = '/.lazaro/data.boy';

module.exports = {
    load: () => {
        if (fs.existsSync(os.homedir() + fileName)) {
            return fs.readFileSync(os.homedir() + fileName, 'utf8');
        }
        return '[]';
    },
    save: dataToSave => fs.writeFileSync(os.homedir() + fileName, dataToSave, 'utf8'),
};
