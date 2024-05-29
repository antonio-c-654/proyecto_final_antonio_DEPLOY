"use strict";(self["webpackChunkproyecto_final_antonio"]=self["webpackChunkproyecto_final_antonio"]||[]).push([[341],{8341:function(e,o,t){t.r(o),t.d(o,{default:function(){return O}});var s=t(6768),l=t(4232);const a={class:"bg-[#111015] flex md:h-[90vh] h-auto w-full"},i={id:"menu_lateral",class:"w-[12vw] h-[70vh] hidden lg:flex flex-col pl-4 text-white"},n=(0,s.Lk)("h1",{class:"text-xl font-bold underline underline-offset-4 mt-8 mb-8 ml-2"},"Productos",-1),r=["innerHTML"],c={class:"text-sm"},d={id:"productos",class:"h-auto lg:w-[88vw] w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 justify-evenly overflow-scroll no-scrollbar p-8"},u={class:"w-full flex justify-between"},p={class:"flex gap-2"},f={key:0,class:"fa-solid fa-wheat-awn text-yellow-600"},m={key:1,class:"fa-solid fa-shrimp text-red-400"},h={key:2,class:"fa-solid fa-egg text-fuchsia-100"},k={key:3,class:"fa-solid fa-fish text-blue-400"},v={key:4,class:"fa-brands fa-envira text-lime-200"},g={key:5,class:"fa-solid fa-cheese text-yellow-400"},x={class:"flex justify-center w-full md:min-h-[70%] min-h-[50%] rounded-md overflow-hidden my-2"},_=["src"],w={class:"text-[#7c7c86] text-xs overflow-clip"},b={class:"text-[#dadbdb] font-bold text-base"},C={key:0,class:"fa-solid fa-pepper-hot text-red-600 ml-2"},y={key:1,class:"fa-brands fa-envira text-green-400 ml-2"},L=(0,s.Lk)("br",null,null,-1),E={class:"w-full flex justify-between items-center"},X={class:"text-teal-400 lg:text-2xl md:text-xl text-lg"},A=["onClick"];function Q(e,o,t,Q,T,j){const F=(0,s.g2)("NavVue"),D=(0,s.g2)("FooterVue");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(F),(0,s.Lk)("div",a,[(0,s.Lk)("div",i,[n,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.categorias,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id_cat,onClick:o[0]||(o[0]=(...e)=>j.no_implementado&&j.no_implementado(...e)),class:"hover:bg-white hover:bg-opacity-90 hover:text-black rounded-md h-[40px] w-[95%] pl-2 flex items-center mb-4 cursor-pointer"},[(0,s.Lk)("span",{innerHTML:e.icono,class:"mr-2"},null,8,r),(0,s.Lk)("span",c,(0,l.v_)(e.nombre),1)])))),128))]),(0,s.Lk)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.productos,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"producto bg-[#22222a] lg:w-[20vw] lg:h-[30vw] md:w-[30vw] md:h-[35vw] w-full h-auto rounded-md flex flex-col items-center justify-between p-4"},[(0,s.Lk)("div",u,[(0,s.Lk)("div",p,[e.alergenos.includes("gluten")?((0,s.uX)(),(0,s.CE)("i",f)):(0,s.Q3)("",!0),e.alergenos.includes("crustaceos")?((0,s.uX)(),(0,s.CE)("i",m)):(0,s.Q3)("",!0),e.alergenos.includes("huevos")?((0,s.uX)(),(0,s.CE)("i",h)):(0,s.Q3)("",!0),e.alergenos.includes("pescado")?((0,s.uX)(),(0,s.CE)("i",k)):(0,s.Q3)("",!0),e.alergenos.includes("soja")?((0,s.uX)(),(0,s.CE)("i",v)):(0,s.Q3)("",!0),e.alergenos.includes("lacteos")?((0,s.uX)(),(0,s.CE)("i",g)):(0,s.Q3)("",!0)]),e.favorito?((0,s.uX)(),(0,s.CE)("i",{key:0,class:"fa-solid fa-heart text-red-500 cursor-pointer",onClick:o[1]||(o[1]=(...e)=>j.no_implementado&&j.no_implementado(...e))})):(0,s.Q3)("",!0),!1===e.favorito?((0,s.uX)(),(0,s.CE)("i",{key:1,class:"fa-regular fa-heart text-red-500 cursor-pointer hover:bg-red-500",onClick:o[2]||(o[2]=(...e)=>j.no_implementado&&j.no_implementado(...e))})):(0,s.Q3)("",!0)]),(0,s.Lk)("div",x,[(0,s.Lk)("img",{src:e.imagen,class:"w-full h-full"},null,8,_)]),(0,s.Lk)("p",w,[(0,s.Lk)("span",b,[(0,s.eW)((0,l.v_)(e.nombre)+" ",1),e.picante?((0,s.uX)(),(0,s.CE)("i",C)):(0,s.Q3)("",!0),e.vegano?((0,s.uX)(),(0,s.CE)("i",y)):(0,s.Q3)("",!0)]),(0,s.eW)(),L,(0,s.eW)(" "+(0,l.v_)(e.descripcion),1)]),(0,s.Lk)("div",E,[(0,s.Lk)("span",X,(0,l.v_)(e.precio)+" €",1),(0,s.Lk)("button",{onClick:o=>j.add_to_cart(e),class:"text-white w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400"},"Añadir",8,A)])])))),128))])]),(0,s.bF)(D)])}var T=t(6565),j=t(7640),F=t(7411),D=t(782),V={components:{NavVue:T.A,FooterVue:j.A},computed:{...(0,D.aH)(["productos","categorias"])},methods:{...(0,D.PY)(["ADD_TO_CART"]),add_to_cart(e){this.toast.success("Añadido!",{timeout:1e3}),this.ADD_TO_CART(e)},no_implementado(){this.toast.info("Funcionalidad no implementada todavia",{timeout:1400})},popup_cookies(){this.toast.info("Este sitio web utiliza cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.",{position:"bottom-left",timeout:!1,transition:"Vue-Toastification__fade"})},check_popup_cookie(){const e=localStorage.getItem("popup_mostrado_arleburger");e||(this.popup_cookies(),localStorage.setItem("popup_mostrado_arleburger","true"))}},setup(){const e=(0,F.dj)();return{toast:e}},mounted(){this.$store.dispatch("GET_ALL_PRODUCTS"),this.check_popup_cookie()}},I=t(1241);const H=(0,I.A)(V,[["render",Q]]);var O=H}}]);
//# sourceMappingURL=341.23264ac0.js.map