const uuidv1 = require('uuid/v1');
module.exports = class tank {
    constructor() {
        this.id = uuidv1();
        this.x = 0;
        this.y = 0;
        this.turn = 0;
        this.turn_tower = 0;
        this.shot = false;
        this.health = 0; //жизни


        this.speed = 1;
        this.speedTurnTower = 1;
        this.speedTurn = 1;
    }

    setShot(x, y) {
        return true;
    }


    towerLeft() {
        this.turn_tower = this.turn_tower - 1 * this.speedTurnTower;
    }

    towerRight() {
        this.turn_tower = this.turn_tower + 1 * this.speedTurnTower;
    }

    turnLeft() {
        this.turn = this.turn - 1 * this.speedTurn;
    }
    turnRight() {
        this.turn = this.turn + 1 * this.speedTurn;
    }



}