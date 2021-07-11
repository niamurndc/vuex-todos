<template>
  <div class="content">
    <h2>Add Games</h2>
    <div class="input-grp">
      <input type="text" v-model="title">
      <button @click="addnewgame">submit</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'About',
  data(){
    return{
      title: ''
    }
  },

  methods: {
    ...mapActions(['addgame']),

    addnewgame(){
      this.addgame(this.title)
      this.$router.push({path: '/'})
    }
  }
}
</script>


<style>
.input-grp{
  width: 100%;
}

input{
  width: 70%;
  height: 40px;
  border: none;
  outline: none;
}

button{
  width: 28%;
  height: 40px;
  border: none;
  outline: none;
  margin-left: 10px;
}
</style>
