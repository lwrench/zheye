<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" id="email"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1">邮箱地址</label>
        <input
          type="email" class="form-control"
          id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const currentUser: UserProps = {
  isLogin: true,
  name: 'viking',
  id: 1
}
const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      } else {
        emailRef.error = false
      }
    }
    return {
      user: currentUser,
      emailRef,
      validateEmail,
      emailRules
    }
  }
})
</script>

<style>

</style>
