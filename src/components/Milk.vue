<template>
  <div>
    <h1>Milk storage and prices</h1>
    <li v-for="el of storage" :key="el">{{el.name}} by $ {{el.price}} for each 
      <img v-bind:src="el.img">
      <button v-on:click="function() {
        let newItem = {
          name: el.name,
          price: el.price
        };
        add(newItem)}
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

  export default {
    data() { return {
      storage: [
        {name:'Almond', price: 7, img:'https://i.imgur.com/h6wVZqO.png'},
        {name:'Cashew', price: 5, img:'https://i.imgur.com/o4SbRQ6.png'},
        {name:'Hazelnut', price: 9, img:'https://i.imgur.com/rhEZKFY.png'},
      ]
    }
    },
    methods: {
        add ( arr ) {
          window.purshaseBox.push( arr )
        }
    },
  }
</script>