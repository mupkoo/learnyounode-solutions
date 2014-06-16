var net = require('net');

var server = net.createServer(function (socket) {
    socket.write(getDate() + '\n');
    socket.end();
});

server.listen(process.argv[2]);

function getDate() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    // "2013-07-06 07:42"
    return year + '-' + padNumber(month) + '-' + padNumber(day) + ' ' + padNumber(hours) + ':' + padNumber(minutes);
}

function padNumber(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}
