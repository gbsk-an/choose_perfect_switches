<template>
  <v-section class="section-start" :is-large="true">
    <Banner />
    <Info />
  </v-section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$white: $WHITE;
$yellow: $YELLOW;
$black-2: $BLACK-SECOND;

.section-start {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
