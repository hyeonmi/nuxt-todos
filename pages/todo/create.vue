<template>
  <div>
    <h1>Create Todo</h1>
    <input v-model="input" type="text" @keyup="inputTodo">
    <button type="button" @click="addTodo">
      ADD
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoInput',
  data () {
    return { input: '' }
  },
  methods: {
    inputTodo (event) {
      if (event.key !== 'Enter') { return }

      this.addTodo()
    },
    addTodo () {
      if (this.input.trim() === '') { return }

      this.createTodo(this.input)
      this.input = ''

      // redirect list
      this.$router.push('/')
    },
    ...mapActions(['createTodo'])
  }
}
</script>
