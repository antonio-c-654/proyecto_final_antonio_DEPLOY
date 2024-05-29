<template>
  
  <div>
    <NavVue></NavVue>

    <div class="bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto">
        <form v-if="estado_input == 'correo'" @submit.prevent="enviar_mail" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
            <p class="md:text-2xl text-xl">Introduce tu correo</p>
            <input type="email" placeholder="Email" v-model="email" required class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
            <button type="submit" class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Enviar</button>
        </form>
        <form v-if="estado_input == 'token'" @submit.prevent="enviar_token" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
            <p class="md:text-2xl text-xl">Introduce el token que te hemos enviado</p>
            <input type="text" placeholder="Token" v-model="token_input" required class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
            <button type="submit" class="bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400">Enviar</button>
        </form>
        <form v-if="estado_input == 'passwd'" @submit.prevent="cambiar_pass" class="md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4">
            <p class="md:text-2xl text-xl">Introduce tu nueva contraseña</p>
            <input type="password" placeholder="Contraseña" v-model="new_password" required minlength="8" class="p-2 rounded-md w-full bg-[#111015] border border-[#14c458]">
            <p class="w-full text-sm italic"><i class="fa-solid fa-circle-info"></i> La contraseña que elijas debe tener al menos 8 caracteres</p>
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
            email: null,
            token_input: null,
            new_password: null,
            estado_input: 'correo'
        }
    },
    methods: {
        async enviar_mail(){
            try {
                const res = await axios.post('/api/users/forgotPass',
                    {
                        destinatario: this.email,
                    }
                )

                const datos = res.data

                if(datos.estado == 'success'){
                    this.toast.success(datos.mensaje, { timeout: 2000, });
                    this.estado_input = 'token'
                } else {
                    this.toast.warning(datos.mensaje, { timeout: 2000, });
                }
            } catch (error) {
                this.toast.error('Ha habido un error:', error);
            }
        },
        async enviar_token(){
            try {
                const res = await axios.post('/api/users/verifyToken',
                    {
                        token: this.token_input
                    }
                )

                const datos = res.data

                if(datos.estado == 'success'){
                    this.toast.success(datos.mensaje, { timeout: 2000, });
                    this.estado_input = 'passwd'
                } else {
                    this.toast.warning(datos.mensaje, { timeout: 2000, });
                }
            } catch (error) {
                this.toast.error('Ha habido un error:', error);
            }
        },
        async cambiar_pass(){
            try {
                const res = await axios.post('/api/users/resetPass',
                    {
                        new_passw: this.new_password,
                        user_mail: this.email
                    }
                )

                const datos = res.data

                if(datos.estado == 'success'){
                    this.toast.success(datos.mensaje, { timeout: 2000, });
                    this.$router.push( {name: 'inicio'} )
                } else {
                    this.toast.warning(datos.mensaje, { timeout: 2000, });
                }
            } catch (error) {
                this.toast.error('Ha habido un error:', error);
            }
        },
    },
    setup() {
      const toast = useToast();      
      return { toast }
    },
}
</script>

<style>

</style>