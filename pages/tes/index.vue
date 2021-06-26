<template>
  <div class="container">
    <ColorModePicker />
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'

export default {
  components: {
    ColorModePicker
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 50px;
}
</style>
