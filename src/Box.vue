<template>
  <div id="myBox">
    <ul>
      <li v-for="(el, key) in storage" :key="key" v-if="el>0">{{key}} - {{el}}
          <button @click="function(){
              deleteItem(key)
              sumMinus
          }">Delete Item</button>
      </li>
    </ul>
    <p>Summary - {{sum}}</p>
  </div>
</template>

<style scoped>
    div{
        background-color: aqua;
    }
</style>

<script>
    
    import purshaseBox from "./components/scripts/basket.js"
    import priceBox from "./components/scripts/basket.js"
    import summary from "./components/scripts/basket.js"
    import sum from "./components/scripts/basket.js"

    export default {
        data () { return {
            storage: window.purshaseBox,
            prices: window.priceBox,
            summ: 0,
        }},

        methods: {
            deleteItem: function ( key ) {

                for ( let item in window.purshaseBox ) {
                
                if ( [item] == key ) {
                
                    window.purshaseBox[item] -= 1;
                    
                    if ( window.purshaseBox[item] <= 0 ) {
                    
                        window.purshaseBox[item] = 0;
                    
                    }
                    
                }
                
                }

            },
        },
        computed: {
            sum: function () {
                  
                let thisSum = 0;

                for ( let item in this.storage ) {
                
                    for ( let price in this.prices ) {
                    
                        if( price == item ) {
                        
                            thisSum += this.storage[item] * this.prices[price]
                        
                        }
                    
                    }
                
                }
                return this.summ + thisSum

            },

            sumMinus: function () {
	  
                let thisSum = 0;

                for ( let item in this.storage ) {
                
                    for ( let price in this.prices ) {
                    
                        if( price == item ) {
                        
                            thisSum += this.storage[item] * this.prices[price]
                        
                        }
                    
                    }
                
                }
                return this.summ - thisSum

            },
        },
    };

    
</script>>