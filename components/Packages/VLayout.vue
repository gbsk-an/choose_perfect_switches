<template>
  <div class="page">
    <main class="page-wrapper">
      <slot name="page-content" />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page-wrapper {
  position: relative;
  flex: auto;
  background: inherit;
}
</style>
