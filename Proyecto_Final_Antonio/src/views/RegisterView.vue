<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto">
      <form @submit.prevent="register" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
        <p class="md:text-2xl text-xl">Register</p>
        <input type="text" placeholder="Nombre" v-model="nombre" required minlength="2" maxlength="20" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="email" placeholder="Email" v-model="email" required minlength="5" maxlength="30" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="password" placeholder="Contraseña" v-model="password" required minlength="8" maxlength="30" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <p class="w-full text-sm italic"><i class="fa-solid fa-circle-info"></i> La contraseña que elijas debe tener al menos 8 caracteres</p>
        <div class="w-full">
          <input type="checkbox" id="polit_priv" v-model="politica" required class="p-2 rounded-md">
          <label for="polit_priv" class="text-white md:text-base text-sm"> He leído y acepto la <router-link to="/politica" class="text-blue-500 underline">política de privacidad</router-link></label>
        </div>
        <router-link to="/login" class="text-blue-500 underline w-full">¿Ya tienes cuenta? Inicia sesión</router-link>
        <button type="submit" class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Enviar</button>
      </form>
    </div>

    <FooterVue></FooterVue>
  </div>

</template>

<script>
import NavVue from '@/components/NavVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import { useToast } from "vue-toastification";
import axios from 'axios';
export default {
  components: { NavVue, FooterVue },
  data(){
    return{
      nombre: null,
      email: null,
      password: null,
      politica: null,
    }
  },
  methods: {
    async register() {
      try {
        const res = await axios.post('/api/users/register',
          {
            email: this.email,
            password: this.password,
            nombre: this.nombre
          }
        )

        const datos = res.data
        console.log(datos.mensaje)

        if(datos && datos.estado == 'success'){
          this.$router.push( {name: 'login'} )
        } else {
          this.toast.error(datos.mensaje, {
            timeout: 2000,
          });
        }
      } catch (error) {
        this.toast.error('Ha habido un error:', error);
      }
    },

  },
  setup() {
      const toast = useToast();      
      return { toast }
  }
}
</script>

<style lang="sass" scoped>

</style>