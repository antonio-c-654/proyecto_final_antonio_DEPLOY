import { createStore } from 'vuex'
import { categorias } from './categorias'
import { metodos_pago } from './metodos_pago'
import axios from 'axios'

export default createStore({
  state: {
    productos: [],
    carrito: [],
    contador_id_cart_prod: 1,
    pago_total: 0,
    categorias: categorias,
    metodos_pago: metodos_pago,
    user_logueado: -1
  },
  
  mutations: {
    SET_PRODUCTS(state, productos) {
      state.productos = productos
    },
    ADD_TO_CART(state, producto) {
      // ... operador de propagacion, copia los campos y valores del objeto.
      // Añadir las 2 nuevas propiedades permite borrar un elemento por su id_cart_prod unico que se genera con el contador_id_cart_prod del state y añadir su coccion.
      // La coccion por defecto es al punto por si no se quiere elegir.
      const new_Prod = { ...producto, id_cart_prod: state.contador_id_cart_prod, coccion: 'Al punto' }
      state.carrito.push(new_Prod)
      state.contador_id_cart_prod++
    },
    CHANGE_COOKING(state, datos) {
      const { id_cart_prod, coccion } = datos
      const prod_encontrado = state.carrito.find(prod => prod.id_cart_prod == id_cart_prod)
      if (prod_encontrado) {
        prod_encontrado.coccion = coccion
      } else {
        console.log('no se ha encontrado el producto (CART) --->', id_cart_prod, coccion)
      }
    },
    REMOVE_FROM_CART(state, id_cart_prod) {
      state.carrito = state.carrito.filter(producto => producto.id_cart_prod != id_cart_prod)
    },
    EMPTY_CART(state) {
      state.carrito = []
    },
    SET_PAGO_TOTAL(state, pago_total) {
      state.pago_total = pago_total
    },
    LOGIN_USER(state, usuario){
      if(usuario){
        state.user_logueado = usuario
      }
      else{
        console.log('no se ha podido hacer login')
      }
    },
    LOGOUT(state){
      state.user_logueado = -1
    },
  },

  actions: {
    async GET_ALL_PRODUCTS({ commit }){
      try {
        const res = await axios.get('/api/products/allProducts')
        commit('SET_PRODUCTS', res.data.productos) // contexto

      } catch (error) {
        this.toast.error('Ha habido un error:', error)
      }
    }
  }
})
