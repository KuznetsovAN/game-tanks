let CGame = require('./src/game-server/game');
const game = new CGame();
let i = 0;
process.send({
    type: 'setTanks',
    data: game.tanks
});

process.on('message', (msg) => {


    if (msg.type == 'init') {

    }
});

while (true) {

    if (i % 100000 == 0) {
        process.send({
            type: 'updade',
            data: game.tanks
        });
    }

    //  process.send({ a: i });

    i++;
    // console.log(1);
}