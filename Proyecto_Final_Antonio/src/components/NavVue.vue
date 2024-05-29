<template>

    <nav class="bg-[#14c458] text-white text-lg font-bold tracking-widest w-full h-[10vh] flex items-center justify-between">

        <p @click="toogleMenuHam()" class="flex md:hidden cursor-pointer text-xl ml-8"><i class="fa-solid fa-bars"></i></p>
        <div id="menu_hamburguesa" v-if="burger_menu_open" class="bg-[#111015] absolute top-0 w-full h-[100vh] flex flex-col gap-2 pl-4 z-10">
            <div class="w-full flex justify-end p-2">
                <i @click="toogleMenuHam()" class="fa-solid fa-xmark cursor-pointer text-3xl text-red-500"></i>
            </div>
            <router-link to="/" class="">Inicio</router-link>
            <router-link to="/politica" class="">Política de privacidad</router-link>
            <router-link to="/contacto" class="">Contacto</router-link>
            <router-link v-if="user_logueado == -1" to="/register" class="">Registrarse</router-link>
            <router-link v-if="user_logueado == -1" to="/login" class="">Iniciar sesión</router-link>
            <router-link v-if="user_logueado != -1" :to="`/perfil/${user_logueado.id}`" class="">Perfil</router-link>
            <p v-if="user_logueado != -1" @click="logout()">Cerrar sesión</p>
        </div>

        <div id="nav_izq" class="w-[60vw] h-full md:flex hidden items-center justify-around">
            <div class="h-full flex items-center">
                <img src="../assets/logo_v_3.png" class="h-[80%]">
            </div>
            <router-link to="/" class="hover:text-black hover:underline hover:underline-offset-4">Inicio</router-link>
            <router-link to="/politica" class="hover:text-black hover:underline hover:underline-offset-4">Política de privacidad</router-link>
            <router-link to="/contacto" class="hover:text-black hover:underline hover:underline-offset-4">Contacto</router-link>
        </div>

        <div id="nav_der" class="w-[30vw] border-l-black h-full flex items-center justify-evenly">

            <CartVue></CartVue>

            <div id="register_sesion" v-if="!burger_menu_open && user_logueado == -1" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <router-link to="/register" class="">Registrarse</router-link>
                <i class="fa-solid fa-user-plus ml-3"></i>
            </div>
            <div id="login_sesion" v-if="!burger_menu_open && user_logueado == -1" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <router-link to="/login" class="">Iniciar sesión</router-link>
                <i class="fa-solid fa-user ml-3"></i>
            </div>
            <div @click="ir_a_perfil()" v-if="!burger_menu_open && user_logueado != -1" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <span>Perfil</span>
                <i class="fa-solid fa-user-gear ml-3"></i>
            </div>
            <div @click="logout()" v-if="!burger_menu_open && user_logueado != -1" class="hidden md:flex items-center hover:bg-green-400 p-2 rounded-md cursor-pointer text-sm">
                <span>Cerrar sesión</span>
                <i class="fa-solid fa-right-to-bracket ml-3"></i>
            </div>
        </div>

    </nav>
    
</template>

<script>
import CartVue from '@/components/CartVue.vue';
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'NavVue',
    components: { CartVue },
    data(){
        return{
            burger_menu_open: false
        }
    },
    computed: {
        ...mapState(['user_logueado'])
    },
    methods:{
        ...mapMutations(['LOGOUT']),
        logout(){
            this.LOGOUT()
            this.$router.push( {name: 'inicio'} )
        },
        toogleMenuHam(){
            this.burger_menu_open = !this.burger_menu_open
        },
        ir_a_perfil(){
            this.$router.push( {name: 'perfil', params:{id: this.user_logueado.id}} )
        }
    }
}
</script>

<style>

</style>