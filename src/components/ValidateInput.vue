<template>
  <div class="validate-input-container pb-3">
        <input
          type="text"
          class="form-control"
          :class="{'is-invalid': inputRef.error, 'is-valid': inputRef.message !== 'init' && !inputRef.error}"
          :value="inputRef.val"
          @blur="validateInput"
          @input="updateInput"
          v-bind="$attrs"
        >
        <div v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProp {
  type: 'required' | 'validEmail' | 'passwordTooSimple';
  message: string;
}

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/

export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: 'init'
    })

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break
            case 'validEmail':
              passed = emailReg.test(inputRef.val.trim())
              break
            case 'passwordTooSimple':
              passed = passwordReg.test(inputRef.val.trim())
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }

    const updateInput = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    return {
      inputRef,
      validateInput,
      updateInput
    }
  }
})
</script>

<style>

</style>
