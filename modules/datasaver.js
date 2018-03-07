const fs = require('fs')
const os = require('os')
const fileName = '/.lazaro/data.boy'

module.exports = {

    load : function() {
        //return '[{"name" : "Test", "type" : "group", "elements" : [{"name" : "John Doe"}]}, {"name" : "You", "type" : "element"}]'
        if(fs.existsSync(os.homedir() + fileName)) {
            return fs.readFileSync(os.homedir() + fileName, 'utf8');
        }
        return '[]'
    },

    getOne : function(ip) {
        var allResults = load()
        /* apply some filter */
        return '[]'
    },

    addOnde: function(data) {

    },

    save : function(dataToSave) {
        return fs.writeFileSync(os.homedir() + fileName, dataToSave, 'utf8')
    }
}