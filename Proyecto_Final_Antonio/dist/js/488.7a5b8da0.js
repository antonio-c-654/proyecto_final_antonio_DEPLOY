"use strict";(self["webpackChunkproyecto_final_antonio"]=self["webpackChunkproyecto_final_antonio"]||[]).push([[488],{6488:function(e,t,l){l.r(t),l.d(t,{default:function(){return x}});var o=l(6768),r=l(5130);const a={class:"bg-[#111015] text-white flex flex-col items-center pt-6 md:h-[85vh] min-h-[70vh] h-auto"},s=(0,o.Lk)("p",{class:"md:text-2xl text-xl"},"Register",-1),n=(0,o.Lk)("p",{class:"w-full text-sm italic"},[(0,o.Lk)("i",{class:"fa-solid fa-circle-info"}),(0,o.eW)(" La contraseña que elijas debe tener al menos 8 caracteres")],-1),i={class:"w-full"},d={for:"polit_priv",class:"text-white md:text-base text-sm"},u=(0,o.Lk)("button",{type:"submit",class:"bg-[#14c458] text-[#dadbdb] w-[120px] h-[35px] rounded-md cursor-pointer hover:border hover:border-white-600 shadow-md bg-gradient-to-br from-[#14c458] to-teal-400"},"Enviar",-1);function c(e,t,l,c,p,m){const b=(0,o.g2)("NavVue"),h=(0,o.g2)("router-link"),f=(0,o.g2)("FooterVue");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(b),(0,o.Lk)("div",a,[(0,o.Lk)("form",{onSubmit:t[4]||(t[4]=(0,r.D$)(((...e)=>m.register&&m.register(...e)),["prevent"])),class:"md:w-[30vw] h-full w-[90vw] flex flex-col md:items-center md:gap-8 gap-6 mb-4"},[s,(0,o.bo)((0,o.Lk)("input",{type:"text",placeholder:"Nombre","onUpdate:modelValue":t[0]||(t[0]=e=>p.nombre=e),required:"",minlength:"2",maxlength:"20",class:"p-2 rounded-md w-full bg-[#111015] border border-[#14c458]"},null,512),[[r.Jo,p.nombre]]),(0,o.bo)((0,o.Lk)("input",{type:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=e=>p.email=e),required:"",minlength:"5",maxlength:"30",class:"p-2 rounded-md w-full bg-[#111015] border border-[#14c458]"},null,512),[[r.Jo,p.email]]),(0,o.bo)((0,o.Lk)("input",{type:"password",placeholder:"Contraseña","onUpdate:modelValue":t[2]||(t[2]=e=>p.password=e),required:"",minlength:"8",maxlength:"30",class:"p-2 rounded-md w-full bg-[#111015] border border-[#14c458]"},null,512),[[r.Jo,p.password]]),n,(0,o.Lk)("div",i,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"polit_priv","onUpdate:modelValue":t[3]||(t[3]=e=>p.politica=e),required:"",class:"p-2 rounded-md"},null,512),[[r.lH,p.politica]]),(0,o.Lk)("label",d,[(0,o.eW)(" He leído y acepto la "),(0,o.bF)(h,{to:"/politica",class:"text-blue-500 underline"},{default:(0,o.k6)((()=>[(0,o.eW)("política de privacidad")])),_:1})])]),(0,o.bF)(h,{to:"/login",class:"text-blue-500 underline w-full"},{default:(0,o.k6)((()=>[(0,o.eW)("¿Ya tienes cuenta? Inicia sesión")])),_:1}),u],32)]),(0,o.bF)(f)])}l(4114);var p=l(6565),m=l(7640),b=l(7411),h=l(4373),f={components:{NavVue:p.A,FooterVue:m.A},data(){return{nombre:null,email:null,password:null,politica:null}},methods:{async register(){try{const e=await h.A.post("/api/users/register",{email:this.email,password:this.password,nombre:this.nombre}),t=e.data;console.log(t.mensaje),t&&"success"==t.estado?this.$router.push({name:"login"}):this.toast.error(t.mensaje,{timeout:2e3})}catch(e){this.toast.error("Ha habido un error:",e)}}},setup(){const e=(0,b.dj)();return{toast:e}}},g=l(1241);const w=(0,g.A)(f,[["render",c]]);var x=w}}]);
//# sourceMappingURL=488.7a5b8da0.js.map