let tank = require('./tank');
module.exports =  class CGame{

    constructor() {
        this.tanks = [];
        for (let i=0;i<4;i++){
            let tankItem = new tank();
            tankItem.x = Math.floor(Math.random() * (400 - 0 + 1)) + 0;
            tankItem.y = Math.floor(Math.random() * (400 - 0 + 1)) + 0;
            this.tanks.push(tankItem);
        }
    }

    init(count) {

        for (let i = 0; i < count; i++) {
            this.tanks.push(new tank());
        }
    }

    findTank(id){
        for (let i = 0; i < this.tanks.length; i++) {
            if(this.tanks[i].id == id) return i;
        }
        return null;
    }

    eventPlayer(event,data){

    }

    tics(){

    }



}