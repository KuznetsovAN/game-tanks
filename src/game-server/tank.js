const uuidv1 = require('uuid/v1');
module.exports = class tank {
    constructor() {
        this.id = uuidv1();
        this.x = 0;
        this.y = 0;
        this.turn = 0;
        this.turn_tower = 0;
        this.shot = false;
    }
}