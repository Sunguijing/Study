let fs = require('fs');
fs.readdir('C:/github/DataStructureAndAlgorithm-Study/sunii/node/day2/www', function(err, files){
    if(err){
        return console.log('目录不存在');
    }
    console.log(files);
})