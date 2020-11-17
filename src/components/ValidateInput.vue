<template>
  <div class="validate-input-container pb-3">
        <input
          type="text"
          class="form-control"
          v-model="inputRef.val"
          @blur="validateInput"
        >
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
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
            case 'email':
              passed = emailReg.test()
          }
        })
      }
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>

<style>

</style>
