<template>
  
  <div>

    <atropos-component>
      
      <img
      data-atropos-offset="0.5"
      :src="medal_img" class="h-[70px]">
      
    </atropos-component>

  </div>

</template>

<script>
export default {
  name: 'MedalAtroposVue',
  props: {
    medal_img: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>