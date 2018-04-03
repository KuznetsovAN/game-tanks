var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    client.on('event', function(data){ console.log(1)});
    client.on('disconnect', function(){console.log(2)});
});
server.listen(3000);