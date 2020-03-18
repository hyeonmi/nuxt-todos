<template>
  <div>
    <h1>Todo View</h1>
    <span>{{ selectedTodo.completed ? "완료" : "미완료" }}</span>
    <p>{{ selectedTodo.text }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      selectedTodo: state => state.selectedTodo
    })
  }
}
</script>
