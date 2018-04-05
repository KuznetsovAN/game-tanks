var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
    client.on('emit_method', function(data){ console.log(data)});
    client.on('disconnect', function(){console.log(2)});
});
server.listen(3000);