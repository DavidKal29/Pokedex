import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon:{},
    favoritos:[]
  },
  getters: {
    GET_FAVORITOS(state){
      return state.favoritos
    },
    GET_POKEMON(state){
      return state.pokemon
    }
  },
  mutations: {
    SET_POKEMON(state,pokemon){
      state.pokemon=pokemon
    },
    PUSH_FAVORITOS(state,pokemon){
      state.favoritos.push(pokemon)
    },
    SET_FAVORITOS(state,favoritos){
      state.favoritos=favoritos
    }
  },
  actions: {
    async buscarPokemon({commit},nombre){
      try {
        let data=await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        let pokemon=await data.json()
        commit.SET_POKEMON(pokemon)
        alert('Pokemon encontrado')
      } catch (error) {
        alert(error.message)
      }
    },
    anadirFavoritos({commit},pokemon){
      try {
        commit.PUSH_FAVORITOS(pokemon)
        alert('Añadido a favoritos')
      } catch (error) {
        alert(error.message)
      }
    },
    setearFavoritos({commit},favoritos){
      commit.SET_FAVORITOS(favoritos)
      alert('Setteados los favoritos a 0')
    }

  },
  modules: {
  }
})
