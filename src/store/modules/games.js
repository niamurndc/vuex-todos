//import axios from "axios";

import axios from "axios"

const state = {
  games: []
}

const getters = {
  allgames: state => state.games
}

const actions = {
  async getallgame({commit}){
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    commit('setGames', data.data)
  },

  async addgame({commit}, title){
    const data = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
    commit('addGames', data.data)
  },

  async deletegame({commit}, id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('delGames', id)
  }
}
 
const mutations = {
  setGames: (state, games) => (state.games = games),
  addGames: (state, game) => state.games.unshift(game),
  delGames: (state, id) => state.games = state.games.filter(game => game.id != id)
}

export default {
  state,
  getters,
  actions,
  mutations
}