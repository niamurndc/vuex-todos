<template>
  <div class="content">
    <Filter></Filter>
    <div class="game-grid">
      <div v-for="game in allgames" :key="game.id" class="game">
        <img src="./../assets/pubg.jpg" alt="image" class="game-image">
        <p>{{game.title}}</p>
        <span v-if="game.completed">Accepted</span>
        <span v-else class="danger">Not Accepted</span>
        <p @click="deletegame(game.id)">X</p>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from './../components/Filter.vue'
import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'Home',
  components: {
    Filter
  },
  computed: mapGetters(['allgames']),
  created(){
    this.getallgame()
  },
  methods: {
    ...mapActions(['getallgame', 'deletegame']),

  },
}
</script>

<style>
  .content{
    margin: 30px 0;
  }

  h2{
    color: #fff;
  }

  .game-grid{
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  .game{
    margin: 10px 0;
    color: #fff;
  }

  img{
    height: 150px;
    width: 150px;
  }

  p{
    font-size: 1rem;
    margin-top: 10px;
  }

  span{
    font-size: 0.8rem;
    color: green;
  }

  .danger{
    color: red;
  }
</style>
