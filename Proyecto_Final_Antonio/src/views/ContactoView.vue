<template>

  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] h-auto min-h-[80vh]">
      <form @submit.prevent="no_implementado" class="md:w-[40vw] h-full w-[90vw] flex flex-col md:items-center md:gap-6 gap-4 mb-4">
        <h2 class="md:text-2xl text-lg">¿En qué te podemos ayudar?</h2>
        <p class="md:text-base text-sm">Apreciamos tu feedback para mejorar</p>

        <div class="w-full flex justify-between">
          <input type="text" placeholder="Nombre" v-model="nombre" required minlength="3" maxlength="20" class="p-2 rounded-md w-[45%] bg-[#111015] border border-[#14c458]">
          <input type="email" placeholder="Email" v-model="email" required minlength="5" maxlength="25" class="p-2 rounded-md w-[45%] bg-[#111015] border border-[#14c458]">
        </div>
        
        <div class="w-full flex justify-between">
          <input type="tel" placeholder="Telefono" v-model="telefono" required pattern="[0-9]*" minlength="9" maxlength="9" min="0" class="p-2 rounded-md w-[45%] bg-[#111015] border border-[#14c458]">
          
          <select v-model="categoria" class="bg-[#111015] text-[#9ca3af] p-2 rounded-md w-[45%] border border-[#14c458]">
            <option value=null disabled selected>Categoria</option>
            <option value="duda" >Duda</option>
            <option value="incidencia" >Incidencia</option>
            <option value="sugerencia" >Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <textarea name="mensaje" id="mensaje" v-model="mensaje" required minlength="4" maxlength="150" placeholder="Escribe aqui tu mensaje..." class="p-2 rounded-md w-full h-[15vh] bg-[#111015] border border-[#14c458]"></textarea>
        <div>
          <input type="checkbox" id="polit_priv" v-model="politica" required class="p-2 rounded-md">
          <label for="polit_priv" class="text-white md:text-base text-sm"> He leído y acepto la <router-link to="/politica" class="text-blue-500 underline">política de privacidad</router-link></label>
        </div>
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
export default {
  components: { NavVue, FooterVue },
  data(){
    return{
      nombre: null,
      email: null,
      telefono: null,
      categoria: null,
      mensaje: null,
      politica: null,
    }
  },
  methods:{
    no_implementado(){
      this.toast.info('Funcionalidad no implementada todavia', { timeout: 1400 })
    },
  },
  setup() {
      const toast = useToast();      
      return { toast }
  },
}
</script>

<style lang="sass" scoped>

</style>