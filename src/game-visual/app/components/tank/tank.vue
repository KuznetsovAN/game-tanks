<template>

  <div class="tank" v-bind:style="tankStyle()">
        <div class="tank__tower" v-bind:style="trunkStyle()" >
            <div class="tank__trunk"></div> 
  
        </div>
  </div>
     
</template>

<script>
    export default {
        name: "tank",
        props:['model'],
        data() {
            return {
              
            }
        },
        methods: {
          tankStyle(){
            let top = "top:"+(this.model.y+200-25)+"px; "; 
            let left = "left:"+(this.model.x+200-20)+"px; ";   
                             
            let turn = "transform: rotate("+(this.model.turn+90)+"deg);"; 

            return top+left+turn;
          }, 
          
          trunkStyle(){
            let turn = "transform: rotate("+this.model.turn_tower+"deg);";         
            return turn;            
          } 
        },
        created: function () {
          
        }
    } 
</script>

<style scoped>

.tank{
    width:40px;
    height:50px;
    background-color:blue;
    position:absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
}

.tank__tower{ 
  background-color: brown;
  width: 20px;
  height: 20px;
  position: relative;
} 

.tank__trunk{
  background-color: brown;
  position:absolute;
  width: 10px;
  height: 30px;
  top:-30px; 
  left: 5px;
  
}



</style>