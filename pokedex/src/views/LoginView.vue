<template>
  <section>
    <form @submit.prevent="logear">
        <div class="">
            <label for="">Email</label>
            <input type="email" placeholder="Tu correo">
        </div>
        <div class="">
            <label for="">Password</label>
            <input type="password" placeholder="Tu contraseña">
        </div>
        <p>¿No tienes cuenta? <router-link to="/register">Crear cuenta</router-link></p>
        <button class="">Iniciar Sesión</button>
    </form>
  </section>
</template>

<script>
export default {
    name:'LoginView'
}
</script>

<style>

</style>