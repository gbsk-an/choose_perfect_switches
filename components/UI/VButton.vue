<template>
  <button
    ref="button"
    :type="type"
    :class="`ui-button ${themeClass}`.trim()"
    :disabled="disabled"
    @click="onClick"
    v-html="text"
  />
</template>

<script setup lang="ts">
import { Button } from '@/types/index.ts'

const props = withDefaults(defineProps<Button.Model>(), {
  disabled: false,
  type: Button.Types.BUTTON,
  theme: Button.Themes.YELLOW
})

const emit = defineEmits<Button.Emits>()

const themeClasses: Record<Button.Themes, string> = {
  [Button.Themes.YELLOW]: ''
} as const

const themeClass = computed<string>(() => themeClasses[props.theme])

const button = ref<HTMLElement | null>(null)
const onClick = () => {
  if (button.value?.blur) {
    button.value.blur()
  }

  emit('click')
}
</script>

<style lang="scss" scoped>
$black-2: $BLACK-SECOND;
$yellow: $YELLOW;
$white: $WHITE;

.ui-button {
  width: fit-content;
  border: none;
  border-right: 0.6rem solid $black-2;
  border-bottom: 0.6rem solid $black-2;
  background-color: $yellow;
  color: $black-2;
  font-family: Compaq;
  line-height: 150%;
  text-transform: uppercase;
  transition: all 300ms ease;
  @include adaptive-font(2, 1.6);

  @include desktop {
    padding: 1.6rem 2.4rem;
  }

  @include mobile-tablet {
    padding: 0.3rem 1.4rem;
  }

  &:not([disabled]) {
    cursor: pointer;

    @include hover {
      &:hover {
        background-color: $white;
        transform: translateY(-0.3rem);
      }
    }

    &:focus {
      background-color: $white;
      transform: translateY(-0.3rem);
    }
  }

  &[disabled] {
    cursor: default;
  }
}
</style>
