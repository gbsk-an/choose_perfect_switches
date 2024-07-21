<template>
  <div>
    <Transition name="section">
      <section-start v-if="question === Question.QuestionType.START" />
      <section-test v-else-if="question !== Question.QuestionType.RESULT" />
      <section-result v-else />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { Question } from '@/types/index.ts'
import useTestStore from '@/store/test.ts'
import SectionStart from '@/views/SectionStart.vue'
import SectionTest from '@/views/SectionTest.vue'
import SectionResult from '@/views/SectionResult.vue'

const { question } = storeToRefs(useTestStore())
</script>
