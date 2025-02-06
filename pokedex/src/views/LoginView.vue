<template>
  <section>
    <form @submit.prevent="logear">
        <div class="">
            <label for="">Email</label>
            <input type="email" placeholder="Tu correo" v-model="email">
        </div>
        <div class="">
            <label for="">Password</label>
            <input type="password" placeholder="Tu contraseña" v-model="password">
        </div>
        <p>¿No tienes cuenta? <router-link to="/register">Crear cuenta</router-link></p>
        <button class="">Iniciar Sesión</button>
    </form>
  </section>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../db/firebase.js'
export default {
    name:'LoginView',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async logear(){
            try {
                const userCredentials=await signInWithEmailAndPassword(auth,this.email,this.password)
                if (!userCredentials.user.emailVerified) {
                    alert('Estas logueado, pero estas sin verificar')
                }else{
                    alert('Estas logueado y verificado')
                }
            } catch (error) {
                alert(error.message)
            }

        }
    }
}
</script>

<style>

</style>