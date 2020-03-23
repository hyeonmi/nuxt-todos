<template>
  <div id="app">
    <todo-list />
    <todo-footer />
  </div>
</template>

<script>
import TodoList from '~/components/TodoList'
import TodoFooter from '~/components/TodoFooter'

export default {
  components: {
    TodoList,
    TodoFooter
  }
}
</script>
