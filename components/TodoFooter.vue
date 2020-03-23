<template>
  <div>
    <button type="button" @click="updateVisibility('all')">
      All
    </button>
    <button type="button" @click="updateVisibility('active')">
      Active
    </button>
    <button type="button" @click="updateVisibility('completed')">
      Completed
    </button>
    <button
      v-show="completedCount > 0"
      type="button"
      @click="removeCompletedTodo"
    >
      Clear completed
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['completedCount'])
  },
  methods: {
    ...mapActions(['updateVisibility', 'removeCompletedTodo'])
  }
}
</script>
