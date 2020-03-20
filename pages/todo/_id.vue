<template>
  <div>
    <h1>Todo View</h1>
    <span>{{ todo.completed ? "완료" : "미완료" }}</span>
    <p>{{ todo.text }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      todo: state => state.selectedTodo
    })
  }
}
</script>
