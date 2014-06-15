var http = require('http'),
    urls = [];

for (var i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
}

parseUrl(urls[0], function () {
    parseUrl(urls[1], function () {
        parseUrl(urls[2], function () {
            // End
        });
    });
});

function parseUrl(url, callback) {
    var result = '';

    http.get(url, function (res) {
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            result += chunk;
        });

        res.on('end', function () {
            console.log(result);
            callback();
        });
    });
}
