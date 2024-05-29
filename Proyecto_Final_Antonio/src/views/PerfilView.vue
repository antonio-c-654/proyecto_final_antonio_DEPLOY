<template>

  <div>
    
    <NavVue></NavVue>
    
    <div class="bg-[#111015] text-white flex flex-col items-center min-h-[90vh] w-full">
      
      <div id="perfil" class="w-full h-[20vh] flex items-center p-2 bg-[#22222a]">
        <img :src="pfp_actual" class="w-[30vw] h-[30vw] md:w-[7vw] md:h-[7vw] md:ml-6 rounded-full">
        <p class="ml-4">{{ user_logueado.email }}</p>
      </div>
      <div class="mt-4 p-2 md:flex md:flex-col">
        <label>Expositor de recompensas</label>
        <div id="expositor" class="w-full md:w-[30vw] h-auto flex items-center justify-evenly p-4 mb-4 mt-2 rounded-lg border border-[#14c458]">
          <medal-atropos-vue-vue :medal_img="medal_src_1"></medal-atropos-vue-vue>
          <medal-atropos-vue-vue :medal_img="medal_src_2"></medal-atropos-vue-vue>
          <medal-atropos-vue-vue :medal_img="medal_src_3"></medal-atropos-vue-vue>
          <medal-atropos-vue-vue :medal_img="medal_src_4"></medal-atropos-vue-vue>
        </div>
        <label>Foto de perfil</label>
        <div id="imgs_perfil" class="w-full md:w-[30vw] h-auto flex items-center justify-evenly flex-wrap p-4 mb-4 mt-2 rounded-lg border border-[#14c458]">
          <img @click="elegir_pfp(pfp_1_burger)" :src="pfp_1_burger" class="h-[70px] rounded-full cursor-pointer hover:border-2 hover:border-[#14c458]">
          <img @click="elegir_pfp(pfp_2_spicy)" :src="pfp_2_spicy" class="h-[70px] rounded-full cursor-pointer hover:border-2 hover:border-[#14c458]">
          <img @click="elegir_pfp(pfp_3_chef)" :src="pfp_3_chef" class="h-[70px] rounded-full cursor-pointer hover:border-2 hover:border-[#14c458]">
          <img @click="elegir_pfp(pfp_4_fries)" :src="pfp_4_fries" class="h-[70px] rounded-full cursor-pointer hover:border-2 hover:border-[#14c458]">
          <img @click="elegir_pfp(pfp_5_icecream)" :src="pfp_5_icecream" class="h-[70px] rounded-full cursor-pointer hover:border-2 hover:border-[#14c458]">
        </div>
        <label>Nueva contraseña</label>
        <input type="password" placeholder="Contraseña" v-model="password" class="p-2 rounded-md w-full md:w-[30vw] bg-[#111015] border border-[#14c458] my-2">
        <div>
          <button @click="cancelar_settings" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 bg-slate-500 my-8">Cancelar</button>
          <button @click="guardarCampos" class="text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600bl bg-gradient-to-br from-[#14c458] to-teal-400 ml-4">Guardar</button>
        </div>
        
      </div>
    </div>
  </div>

</template>

<script>
import NavVue from '@/components/NavVue.vue';
import { mapState } from 'vuex';
import axios from 'axios';
import { useToast } from "vue-toastification";
// atropos
import MedalAtroposVueVue from '@/components/MedalAtroposVue.vue'

export default {
  components: { MedalAtroposVueVue, NavVue },
  data(){
    return{
      password: null,
      direccion: null,
      medal_src_1: require('@/assets/medal_1.png'),
      medal_src_2: require('@/assets/medal_2.png'),
      medal_src_3: require('@/assets/medal_3.png'),
      medal_src_4: require('@/assets/medal_4.png'),
      pfp_actual: '',
      pfp_1_burger: '/profile_img/pfp_1_burger.jpg',
      pfp_2_spicy: '/profile_img/pfp_2_spicy.jpg',
      pfp_3_chef: '/profile_img/pfp_3_chef.jpg',
      pfp_4_fries: '/profile_img/pfp_4_fries.jpg',
      pfp_5_icecream: '/profile_img/pfp_5_icecream.jpg',
    }
  },
  computed:{
    ...mapState(['user_logueado'])
  },
  created() {
    this.pfp_actual = this.user_logueado.foto_perfil // para que no carge la imagen antes de que exista
  },
  methods:{
    async guardarCampos() {
      try {
        const res = await axios.put('/api/users/perfil/settings',
          {
            id: this.user_logueado.id,
            pfp_actual: this.pfp_actual,
            password: this.password,
          }
        )

        const datos = res.data
        this.toast.success(datos.mensaje)
        this.user_logueado.foto_perfil = this.pfp_actual
        this.vaciarCampos()
      } catch (error) {
        this.toast.error('Ha habido un error:', error)
      }
    },
    cancelar_settings(){
      this.password = null
      this.pfp_actual = this.user_logueado.foto_perfil
      this.$router.push( {name: 'inicio'} )
    },
    elegir_pfp(new_pfp){
      this.pfp_actual = new_pfp
    }
  },
  setup() {
      const toast = useToast();      
      return { toast }
  },
}
</script>

<style lang="sass" scoped>

</style>