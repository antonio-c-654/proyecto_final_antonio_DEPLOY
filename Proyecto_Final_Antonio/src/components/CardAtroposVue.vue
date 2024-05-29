<template>
  
  <div>

    <atropos-component class="my-atropos"
      active-offset="40"
      shadow-scale="1.05"
    >
      <img
        class="w-[70vw] md:w-[20vw] mb-2"
        :src="credit_card_img"
      />
    </atropos-component>

  </div>

</template>

<script>
import credit_card_img from '@/assets/credit_card_img.webp';

export default {
  name: 'CardAtroposVue',
  data() {
    return {
      credit_card_img
    };
  }
}
</script>

<style>

</style>