<template>
  <div>
    <h1>Chokolate storage and prices</h1>
    <li v-for="el of storage" :key="el">{{el.name}} by $ {{el.price}} for each <img v-bind:src="el.img">
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
    data () { return {
      storage: [
        {name:'White', price: 5, img:'https://i.imgur.com/dPg8WK9.png'},
        {name:'Milk', price: 3, img:'https://i.imgur.com/66s0Jr4.png'},
        {name:'Dark', price: 4, img:'https://i.imgur.com/DRSN3Of.png'},
      ]
    }},
      methods: {
        add ( arr ) {
          window.purshaseBox.push( arr )
        }
      },
  }
</script>