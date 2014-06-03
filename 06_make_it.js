var filterLs = require('./06_make_it_module');

filterLs(process.argv[2], process.argv[3], function (err, data) {
    data.forEach(function (file) {
        console.log(file);
    });
});
