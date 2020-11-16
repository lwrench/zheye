<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    avatar: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
    description: 'test1'
  },
  {
    id: 2,
    title: 'test2',
    avatar: 'https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png',
    description: 'test2'
  }
]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
