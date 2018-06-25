let CGame = require('./src/game-server/game');
const game = new CGame();
let i = 0;
process.send({
    type: 'setTanks',
    data: game.tanks
});

process.on('message', (msg) => {
    if (msg.type == 'init') {
        process.send({
            type: 'updade',
            data: game.tanks
        });
    } else if (msg.type == 'emit_tower_left') {
        game.tanks[0].towerLeft();
    } else if (msg.type == 'emit_tower_riht') {
        game.tanks[0].towerRight();

    } else if (msg.type == 'emit_tank_left') {
        //console.log(1);
        game.tanks[0].turnLeft();
    } else if (msg.type == 'emit_tank_right') {
        //console.log(2);
        game.tanks[0].turnRight();
    } else if (msg.type == 'emit_forward') {
        //console.log(2);
        game.tanks[0].forward();
    } else if (msg.type == 'emit_backward') {
        //console.log(2);
        game.tanks[0].backward();
    }

});




var lastUpdateTime = (new Date()).getTime();
setInterval(function() {

    process.send({
        type: 'updade',
        data: game.tanks
    });

    var currentTime = (new Date()).getTime();
    lastUpdateTime = currentTime;
}, 1000 / 60);