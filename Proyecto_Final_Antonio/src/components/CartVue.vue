<template>

    <div @click="toogleCart()" id="carrito_icono" class="relative p-3 cursor-pointer">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
        <span class="absolute top-0 r-0 text-sm bg-teal-700 rounded-full px-1">{{ num_prods_cart }}</span>
    </div>

    <div id="cart_contenido" v-if="cart_visible" class="absolute top-[11vh] md:right-[12vw] right-0 md:w-[40vw] md:h-[60vh] w-full max-h-[89vh] flex flex-col items-center gap-2 border-2 border-[#14c458] bg-[#111015] rounded-md px-4 pt-4 z-10">
        <div class="w-full flex justify-end text-red-500">
            <p @click="toogleCart()" class="cursor-pointer text-3xl hover:scale-110"><i class="fa-solid fa-xmark"></i></p>
        </div>

        <div id="div_productos" class="h-[50vh] overflow-y-scroll no-scrollbar flex flex-col gap-2">
            <p v-if="num_prods_cart == 0" class="text-base">Carrito vacío</p>
            <div v-for="prod in carrito" :key="prod.id" class="w-full h-auto flex items-center bg-[#22222a] rounded-md py-2 md:py-0">
                <img :src="prod.imagen" class="w-[20%] hidden md:flex">
                <div class="md:w-[35%] w-[48%] flex flex-col justify-center h-full pl-4 gap-2">
                    <span class="md:text-sm text-xs">{{ prod.nombre }}</span>
                    <span class="md:text-sm text-xs text-teal-400">{{ prod.precio }} €</span>
                </div>
                
                <div class="md:w-[25%] w-[35%]">
                    <select @change="cambiar_coccion(prod.id_cart_prod, $event.target.value)" class="bg-transparent text-white text-sm">
                        <option value="Al punto" class="bg-[#22222a]" disabled selected>Cocción</option>
                        <option value="Poco hecha" class="bg-[#22222a]">Poco hecha</option>
                        <option value="Al punto" class="bg-[#22222a]">Al punto</option>
                        <option value="Muy hecha" class="bg-[#22222a]">Muy hecha</option>
                    </select>
                </div>
                
                <div class="md:w-[20%] w-[17%] h-full flex items-center justify-center">
                    <button @click="quitar_prod_cart(prod.id_cart_prod)" class="text-red-500 border border-red-500 rounded-lg py-1 px-2 md:py-4 md:px-6 hover:border-2"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </div>

        <div class="w-full flex flex-col md:flex-row items-center justify-between bottom-0 sticky bg-[#111015] pb-4 md:pt-2">
            <p class="text-sm md:text-xl font-bold md:w-[45%] w-full md:pl-4 py-2 md:py-0">Total: <span class="text-[#14c458]">{{ calcular_precio_total }} €</span></p>
            <div class="md:w-[50%] w-full flex justify-end gap-2">
                <button @click="vaciar_cart" class="w-[120px] h-[35px] text-sm md:text-base rounded-md cursor-pointer text-white hover:border hover:border-white-600 bg-slate-500">
                    Vaciar<i class="hidden fa-regular fa-circle-xmark ml-2"></i>
                </button>
                <button @click="pagar" class="w-[160px] h-[35px] text-sm md:text-base rounded-md cursor-pointer text-white hover:border hover:border-white-600 bg-gradient-to-br from-[#14c458] to-teal-400">
                    Confirmar<i class="fa-regular fa-circle-check ml-2"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
import { useToast } from "vue-toastification";
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CartVue',
    data(){
        return{
            cart_visible: false,
        }
    },
    computed:{
        ...mapState(['carrito']),
        num_prods_cart() {
            return this.carrito.length;
        },
        calcular_precio_total() {
            const total_cart = this.carrito.reduce((acumulador, producto) => acumulador + parseFloat(producto.precio), 0) // valor inicial: 0
            return parseFloat(total_cart.toFixed(3)) // toFixed devuelve el numero con 3 decimales, pero lo devulve como string, por eso el parseFloat.
        },
    },
    methods:{
        ...mapMutations(['REMOVE_FROM_CART', 'EMPTY_CART', 'SET_PAGO_TOTAL', 'CHANGE_COOKING']),
        cambiar_coccion(id_cart_prod, coccion){
            this.CHANGE_COOKING({id_cart_prod, coccion}) // Solo se le puede pasar un dato a la vez
        },
        quitar_prod_cart(id_cart_prod){
            this.REMOVE_FROM_CART(id_cart_prod)
        },        
        vaciar_cart(){
            this.EMPTY_CART()
        },
        toogleCart(){
            this.cart_visible = !this.cart_visible
        },
        pagar(){
            if (this.num_prods_cart > 0) {
                this.SET_PAGO_TOTAL(this.calcular_precio_total)
                this.$router.push( {name: 'pago', params:{id: 1}} )
            } else {
                this.toast.warning('No tienes productos en tu carrito')
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