<template>
  <div>
    <div v-if="$colorMode.preference === 'light'">
      <a @click="$colorMode.preference = 'dark'">
        <fa :icon="['far', 'moon']" class="moon" />
      </a>
    </div>
    <div v-else-if="$colorMode.preference === 'dark'">
      <a @click="$colorMode.preference = 'light'">
        <fa :icon="['far', 'sun']" class="sun" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   colors: ['light', 'dark']
    }
  }
}
</script>

<style scoped>
.sun {
  color: var(--color-icon-header);
  font-size: 20px;
}
.moon {
  color: var(--color-icon-header);
  font-size: 20px;
}
</style>
