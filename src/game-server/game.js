let tank = require('./tank');
module.exports =  class CGame{

    constructor() {
        this.tanks = [];


    }

    init(count) {

        for (let i = 0; i < count; i++) {
            this.tanks.push(new tank());
        }

    }

}