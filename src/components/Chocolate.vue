<template>
  <div>
    <h1>Chokolate storage and prices</h1>
    <li v-for="el of storage" :key="el">{{el.name}} by $ {{el.price}} for each <img v-bind:src="el.img">
      <button v-on:click="function() {
        addItem(el.name)
        }
  ">add item</button>
    </li>
  </div>
</template>

<style scoped>
h1 {
  color: blue
}
img {
  width: 50px;
  height: 50px;
}
</style>

<script>

  import purshaseBox from "./scripts/basket.js"

  import Vue from 'vue'

  export default {
    data () { return {
      storage: [
        {name:'White', price: 5, img:'https://i.imgur.com/dPg8WK9.png'},
        {name:'Milk', price: 3, img:'https://i.imgur.com/66s0Jr4.png'},
        {name:'Dark', price: 4, img:'https://i.imgur.com/DRSN3Of.png'},
      ]
    }},
      methods: {
        addItem: function ( key ) {
          
          let count = 0;
          
          for ( let item in window.purshaseBox ) {
          
            if ( [item] == key ) {
            
              window.purshaseBox[item] += 1;
              count += 1;
              
            }
          
          }
          
          if ( count == 0 ) {
          
            Vue.set( window.purshaseBox, [key], 1 )
          
          }

        },
      },
  }
</script>