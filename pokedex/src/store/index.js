import { createStore } from 'vuex'
import { auth,db } from '@/db/firebase'
import { doc,getDoc,setDoc } from 'firebase/firestore'
////////////////////////////////////////////////////////////////

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
    SET_FAVORITOS(state,nueva_lista){
      state.favoritos=nueva_lista
    }
  },
  actions: {
    async buscarPokemon({commit},nombre){
      try {
        let data=await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        data=await data.json()

        console.log(data);
        

        let pokemon={
          name:data.name,
          image:data.sprites.front_default,
          types:[],
          stats:[],
          abilities:[]
        }

        data.types.forEach(t => {
          let type_name=t.type.name
          pokemon.types.push(type_name)
        });

        data.stats.forEach(s => {
          let stat_name=s.stat.name
          pokemon.stats.push(stat_name)
        });

        data.abilities.forEach(a => {
          let ability_name=a.ability.name
          pokemon.abilities.push(ability_name)
        });

        console.log(pokemon);
        

        commit('SET_POKEMON',pokemon)
        alert('Pokemon encontrado')
      } catch (error) {
        alert(error.message)
      }
    },
    async anadirFavoritos({commit},pokemon){
      try {
        alert('Vamos a proceder con nombrar el docref')
        let docRef=doc(db,'favoritos',auth.currentUser.uid)
        alert('Doc ref creado')
        let docSnap=await getDoc(docRef)
        alert('Doc snap encontrado')

        if (docSnap.exists()) {
          alert('El documento existe')
          let data=docSnap.data()
          let pokemons=data.pokemons || []
          alert('Se creo el array pokemons')

          alert('Viendo si el pokemon está duplicado...')
          let repe=false
          pokemons.forEach(p => {
            if (p.name==pokemon.name) {
              repe=true
            }
          });
          
          if (!repe) {
            alert('El pokemon no es repe,ok, procediendo')

            await setDoc(docRef,{
              pokemons:[...pokemons,pokemon]
            })
            alert('Se settearon correctamente los datos')

            docSnap=await getDoc(docRef)

            commit('SET_FAVORITOS',docSnap.data().pokemons)
            alert('Se settearon los favoritos')
          }else{
            alert('No admitimos repetidos, sorry')
          }
          
        }else{
          alert('El documento no existe')
          await setDoc(docRef,{
            pokemons:[pokemon]
          })
          alert('Creamos la lista de favoritos')

          docSnap=await getDoc(docRef)

          commit('SET_FAVORITOS',docSnap.data().pokemons)
          alert('Se settearon los favoritos')
        }
      } catch (error) {
        alert(error.message)
      }
    },
    async setearFavoritos({commit}){
      let docRef=doc(db,'favoritos',auth.currentUser.uid)
      let docSnap=await getDoc(docRef)

      commit('SET_FAVORITOS',docSnap.data().pokemons)
    }
  },
  modules: {
  }
})
