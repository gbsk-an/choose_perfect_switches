<template>
  <li class="test-list-item">
    <v-button :text="answer" @click="nextStep" />
    <div v-if="icon" class="test-list-item__icon">
      <img :src="icon" alt="icon" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Question } from '@/types/index.ts'
import useTestStore from '@/store/test.ts'

const props = withDefaults(defineProps<Question.IAnswer>(), {
  icon: ''
})

const { question } = storeToRefs(useTestStore())
const { setQuestion, setAnswer, setResult } = useTestStore()

const nextStep = () => {
  setAnswer(question.value, props.id)
  setQuestion(props.next)

  if (props.next === Question.QuestionType.RESULT) {
    setResult()
  }
}
</script>

<style lang="scss" scoped>
$black-2: $BLACK-SECOND;
$yellow: $YELLOW;

.test-list-item {
  position: relative;

  &__icon {
    position: absolute;
    z-index: 1;
    width: 4rem;
    height: 4rem;
    inset: -2rem 0 0 -2rem;
    transition: all 500ms ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @include hover {
      &:hover {
        transform: rotate(40deg);
      }
    }
  }
}
</style>
