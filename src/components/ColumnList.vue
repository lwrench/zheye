<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img :alt="column.title" :src="column.avatar">
      <p>{{ column.title }}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
})
</script>

<style>
</style>
