<template>
  <div>
    <h1>Edit Todo</h1>
    <todo-input-form :callback="edit" :mode="`edit`" :default-text="selectedTodo && selectedTodo.text" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TodoInputForm from '~/components/TodoInputForm'

export default {
  components: {
    TodoInputForm
  },
  computed: {
    ...mapState({ selectedTodo: state => state.selectedTodo })
  },
  methods: {
    edit (input) {
      this.editTodo(input)

      // redirect list
      this.$router.push('/')
    },
    ...mapActions(['editTodo'])
  }
}
</script>
