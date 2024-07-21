<template>
  <div>
    <section-start v-if="question === Question.QuestionType.START" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Question } from '@/types/index.ts'
import useTestStore from '@/store/test.ts'
import SectionStart from '@/views/SectionStart.vue'

const { question } = storeToRefs(useTestStore())
</script>

<style lang="scss" scoped></style>
