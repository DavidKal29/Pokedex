<template>
  <router-view/>
</template>

<!-- <script>
import { auth } from './db/firebase.js'
  export default{
    mounted(){
      auth.onAuthStateChanged((user)=>{
        if (user) {
          this.$router.push('/perfil')
        }else{
          this.$router.push('/login')
        }
      })
    }
  }
</script> -->
