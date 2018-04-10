
let CGame = require('./src/game-server/game');
const game = new CGame();

var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function (client) {
    io.emit('init', game.tanks);
    client.on('emit_method', function(data){ console.log(data)});
   
    client.on('emit_tower_left', function (data) {
        console.log(data)
    });

    
    
});
server.listen(3000); 