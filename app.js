const { fork } = require('child_process');

const forked = fork('./appRunGame.js');
var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client) {

    client.on('emit_method', function(data) { console.log(data) });

    client.on('emit_tower_left', function(data) {

        //game.tanks[0].towerLeft();
        //io.emit('updade', game.tanks);
    });


    client.on('init', function(data) {

        forked.send({ type: 'init' });
        //game.tanks[0].towerLeft();
        //io.emit('updade', game.tanks);
    });




});
server.listen(3000);






// forked.on('init', (tanks) => {
//     io.emit('init', tanks);
// });




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