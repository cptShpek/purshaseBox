<template>
  <div>
    <ul>
      <li v-for="el in storage" :key="el">{{el.name}} - {{el.price}}
          <button>Delete Item</button>
      </li>
    </ul>
    <p>Summary - {{sum()}}</p>
  </div>
</template>

<style scoped>
    div{
        background-color: aqua;
    }
</style>

<script>

    import purshaseBox from "./components/scripts/basket.js"

    export default {
        data () { return {
            storage: window.purshaseBox,
        }},

        methods: {
            sum: function () {

                let Sum = 0;

                for ( let item of window.purshaseBox ) {
                    Sum += item.price
                }

                return Sum;
            }
        }

    };

    
</script>>