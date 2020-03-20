<template>
  <div>
    <h1>Create Todo</h1>
    <todo-input-form :callback="add" :mode="`add`" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TodoInputForm from '~/components/TodoInputForm'
export default {
  components: {
    TodoInputForm
  },
  methods: {
    add (input) {
      this.createTodo(input)

      // redirect list
      this.$router.push('/')
    },
    ...mapActions(['createTodo'])
  }
}
</script>
