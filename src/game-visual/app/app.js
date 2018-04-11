import './app.less';
//import Vue  from 'vue';

import Vue  from  '../../../node_modules/vue/dist/vue.js'; //'../../node_modules/vue/dist/vue.js';
import VueSocketio from 'vue-socket.io';
import tank  from './components/tank/tank.vue';

Vue.use(VueSocketio, 'http://localhost:3000/');

document.addEventListener('DOMContentLoaded', function(){

    const app = new Vue({
        el: '.game-window',
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            init: function(val){
                this.tanks = val;
            }
        },
        data: {
            tanks: []
        },
        methods:{
            //clickButton: function(val){
                // $socket is socket.io-client instance
              //  this.$socket.emit('emit_method', val);
           // }

           

        



        }, components: {
            // <my-component> будет доступен только в шаблоне родителя
            'tank': tank
        },
        created: function () {
            document.addEventListener("keydown", e => {
                switch (e.keyCode) {
                    //движение башней
                    case 37:  // поворот в влево
                        this.$socket.emit('emit_tower_left', true);
                        break;
                    case 39:   // поворот на вправо
                        this.$socket.emit('emit_tower_riht', true);
                        break;


                    //движение танка 
                    case 87:   //ехать вперед
                        this.$socket.emit('emit_tank_top', true);
                        break;
                    case 83:   //ехать назад
                        this.$socket.emit('emit_tank_bottom', true);
                        break;
                    case 68:   //поворот вправо
                        this.$socket.emit('emit_tank_left', true);
                        break;
                    case 65:   //поворот влево
                        this.$socket.emit('emit_tank_right', true);
                        break;

                    case 32:   //выстрел
                        this.$socket.emit('emit_tank_shot', true); 
                        break;
                }

            });
        }

                
    });

});