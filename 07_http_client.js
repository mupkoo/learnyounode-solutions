var http = require('http'),
    url = process.argv[2];

http.get(url, function (res) {
    res.setEncoding('utf8');
    
    res.on('error', function (error) {
        console.error(error);
    });
    
    res.on('data', function (data) {
        console.log(data);
    });

});
