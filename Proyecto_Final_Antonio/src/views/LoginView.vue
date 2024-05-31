<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto">
      <form @submit.prevent="login" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
        <p class="md:text-2xl text-xl">Login</p>
        <input type="email" placeholder="Email" v-model="email" required minlength="5" maxlength="30" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <input type="password" placeholder="Contraseña" v-model="password" required maxlength="30" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
        <router-link to="/register" class="text-blue-500 underline w-full">¿No tienes cuenta? Regístrate</router-link>
        <router-link to="/forgotpass" class="text-blue-500 underline w-full">¿Has olvidado tu contraseña?</router-link>
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
import { mapState, mapMutations } from 'vuex'
import axios from 'axios';

export default {
  components: { NavVue, FooterVue },
  data(){
    return{
      email: null,
      password: null,
    }
  },
  computed: {
        ...mapState(['user_logueado'])
  },
  setup() {
      const toast = useToast();      
      return { toast }
  },
  methods: {
    ...mapMutations(['LOGIN_USER']),
    async login() {
      try {
        const res = await axios.post('/api/users/login',
          {
            email: this.email,
            password: this.password,
          }
        )

        const datos = res.data

        if(datos && datos.estado == 'success'){
          console.log(datos.user)
          this.LOGIN_USER(datos.user)
          this.$router.push( {name: 'inicio', params:{id: datos.user.id}} )
        } else {
          this.toast.error(datos.mensaje, {
            timeout: 2000,
          });
        }
      } catch (error) {
        this.toast.error('Ha habido un error:', error);
      }
    },

  }
}
</script>

<style lang="sass" scoped>

</style>