<template>
  <div class="page">
    <header class="page-header">
      <slot name="page-header" />
    </header>
    <main class="page-wrapper">
      <slot name="page-content" />
    </main>
    <footer class="page-footer">
      <slot name="page-footer" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$white: $WHITE;

.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.page-header {
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  background-color: $white;
}

.page-wrapper {
  position: relative;
  flex: auto;
  background: inherit;
}
</style>
