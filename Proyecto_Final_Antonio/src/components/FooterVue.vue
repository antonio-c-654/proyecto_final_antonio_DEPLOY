<template>

    <footer class="bg-[#22222a] text-white md:h-[5vh] h-auto flex md:flex-row flex-col md:items-center p-4 md:p-0 gap-2 md:gap-0 md:justify-evenly">
        <div>
            <router-link to="/politica" class="hover:underline">Política de privacidad</router-link>
        </div>
        <div>
            <p class="text-[#14c458]">Copyright © 2024 Arleburger</p>
        </div>
        <div class="flex items-center gap-4">
            <span>Nuestras redes</span>
            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram text-2xl cursor-pointer hover:text-purple-400"></i></a>
            <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube text-2xl cursor-pointer hover:text-red-500"></i></a>
            <a href="https://www.tiktok.com/"><i class="fa-brands fa-tiktok text-2xl cursor-pointer hover:text-blue-300"></i></a>
            <a href="https://www.pinterest.com/"><i class="fa-brands fa-pinterest text-2xl cursor-pointer hover:text-red-500"></i></a>   
        </div>
    </footer>

</template>

<script>
export default {
    name: 'FooterVue'
}
</script>

<style>

</style>