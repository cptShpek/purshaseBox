<template>
  <div>
    <h1>Bread storage and prices</h1>
    <li v-for="el of storage" :key="el">{{el.name}} by $ {{el.price}} for each<img v-bind:src="el.img">
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
        {name:'Toast', price: 2, img:'https://i.imgur.com/2f1AoeB.png'},
        {name:'Baguette', price: 1, img:'https://i.imgur.com/SpVk983.png'},
        {name:'Rye', price: 3, img:'https://i.imgur.com/Kz2gkUa.png'},
      ]
    }},
    methods: {
      add ( arr ) {
        window.purshaseBox.push( arr )
      }
    },
  }
</script>