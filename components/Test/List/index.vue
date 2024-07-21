<template>
  <ul class="test-list">
    <TestListItem v-for="item in list.answerList" :key="item" :next="list.next" v-bind="item" />
  </ul>
</template>

<script setup lang="ts">
import type { Question } from '@/types/index.ts'

interface Props {
  list: Question.Model
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.test-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
}
</style>
