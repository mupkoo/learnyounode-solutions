var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    extension = '.' + process.argv[3],
    file;

fs.readdir(dir, function (err, data) {
    data.forEach(function (file) {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
});
