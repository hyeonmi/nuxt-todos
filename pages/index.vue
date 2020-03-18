<template>
  <div id="app">
    <ul>
      <li v-for="todo in getFilteredTodos" :key="todo.id">
        <input :checked="todo.completed" type="checkbox" @change="toggleTodo(todo.id)">
        <span>{{ todo.text }}</span>
        <button type="button" @click="removeTodo(todo.id)">
          delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TodoList',
  methods: {
    ...mapActions(['removeTodo', 'toggleTodo'])
  },
  computed: {
    ...mapGetters(['getFilteredTodos'])
  }
}
</script>
