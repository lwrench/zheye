<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: 'test1'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
    description: 'test2'
  },
  {
    id: 3,
    title: 'test3',
    avatar: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
    description: 'test3'
  },
  {
    id: 4,
    title: 'test4',
    avatar: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
    description: 'test4'
  }
]
const currentUser: UserProps = {
  isLogin: true,
  name: 'viking',
  id: 1
}

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup () {
    return {
      list: testData,
      user: currentUser
    }
  }
})
</script>

<style>

</style>
