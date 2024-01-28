<template>
  <div>
    <TodoList 
      :todos="todoStore.todos" 
      :addTodo="todoStore.addTodo"
    />
  </div>
</template>

<script setup>

import TodoList from './components/TodoList.vue'
import {useTodoStore} from './store/todos.js'

const todoStore = useTodoStore()

</script>

<style scoped></style>