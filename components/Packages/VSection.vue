<template>
  <section class="section" :class="{ large: isLarge, 'screen-view': isScreenView }">
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  isLarge?: boolean
  isScreenView?: boolean
}

withDefaults(defineProps<Props>(), {
  isLarge: false,
  isScreenView: false
})
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;

  &.large {
    padding: 0;
  }

  &.screen-view {
    min-height: 100vh;
  }
}
</style>
