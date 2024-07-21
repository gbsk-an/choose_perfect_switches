<template>
  <v-section class="section-test" :is-large="true" :is-screen-view="true">
    <div class="section-test-wrapper">
      <h2 class="section-test__title" v-html="questionTitle" />
      <template v-for="(name, index) in questionsListName" :key="index">
        <TestList v-show="question === name" :list="questionsList[index]" />
      </template>
    </div>
  </v-section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useTestStore from '@/store/test.ts'

const { question } = storeToRefs(useTestStore())

const root = useNuxtApp()
const { constants } = root.$configs

const questionsList = constants.questions
const questionsListName = constants.questionsName

const questionTitle = computed(() => {
  return questionsList.filter((el) => el.id === question?.value)[0].question
})
</script>

<style lang="scss" scoped>
$blue-dark: $BLUE-DARK;

.section-test {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $blue-dark;
  background-image: url('@/assets/images/background/grouped.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  &-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;

    @include mobile {
      padding: 2rem 1.6rem;
    }
  }

  &__title {
    font-family: Compaq;
    line-height: 150%;
    text-align: center;
    text-transform: uppercase;
    @include adaptive-font(3, 1.6);
  }
}
</style>
