<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input :value="todo.completed" :checked="todo.completed" type="checkbox" @change="toggleTodo(todo.id)">
      <nuxt-link :to="`/todo/${todo.id}`">
        <span @click="setTodo(todo)">{{ todo.text }}</span>
      </nuxt-link>
      <button type="button" @click.prevent="removeTodo(todo.id)">
        delete
      </button>
      <nuxt-link :to="`/todo/edit`">
        <button type="button" @click="setTodo(todo)">
          edit
        </button>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      todos: 'getFilteredTodos'
    })
  },
  methods: {
    ...mapActions(['removeTodo', 'toggleTodo', 'setTodo'])
  }
}
</script>

<style scoped>
ul{padding:0px}
li{list-style:none}
</style>
