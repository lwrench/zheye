<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <!-- <column-list :list="list"></column-list> -->
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules"
          v-model="emailVal"
          id="email"
          placeholder="请输入邮箱"
        />
      </div>
      <div class="mb-3">
        <label for="password">密码</label>
        <validate-input
          :rules="passwordRules"
          v-model="passwordVal"
          id="password"
          type="password"
          placeholder="请输入密码"
        />
      </div>
    </form>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const currentUser: UserProps = {
  isLogin: true,
  name: 'viking',
  id: 1
}

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const passwordVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱不能为空' },
      { type: 'validEmail', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'passwordTooSimple', message: '密码需要8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符' }
    ]
    return {
      user: currentUser,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal
    }
  }
})
</script>

<style>

</style>
