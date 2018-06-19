const { fork } = require('child_process');

//let CGame = require('./src/game-server/game');
//const game = new CGame();

const forked = fork('./appRunGame.js');
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client) {
    // io.emit('updade', game.tanks);
    client.on('emit_method', function(data) { console.log(data) });

    client.on('emit_tower_left', function(data) {
        forked.send({ type: 'emit_tower_left' });
    });
    client.on('emit_tower_riht', function(data) {
        forked.send({ type: 'emit_tower_riht' });
    });



    client.on('emit_tank_left', function(data) {
        forked.send({ type: 'emit_tank_left' });
    });

    client.on('emit_tank_right', function(data) {
        forked.send({ type: 'emit_tank_right' });
    });



    client.on('init', function(data) {
        console.log('init');
        forked.send({ type: 'init' });
        // game.tanks[0].towerLeft();
        //io.emit('updade', game.tanks);


    });




});


server.listen(3000);






forked.on('message', (data) => {

    if (data.type == 'setTanks') {
        io.emit('init', data.data);
    }
    if (data.type == 'updade') {
        io.emit('updade', data.data);
    }
    // io.emit('init1');
    //  console.log('Message from child', msg.a);
});