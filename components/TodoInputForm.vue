<template>
  <div>
    <input v-model="input" type="text" @keyup="keyupInput">
    <button type="button" @click="updateTodo">
      {{ mode === 'add' ? 'ADD' : 'EDIT' }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    callback: {
      type: Function,
      required: true
    },
    mode: {
      type: String,
      default: 'add'
    },
    defaultText: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      input: this.defaultText
    }
  },
  methods: {
    updateTodo () {
      if (this.input.trim() === '') { return }

      this.callback(this.input)
    },
    keyupInput (event) {
      if (event.key !== 'Enter') { return }

      this.updateTodo(this.input)
    }
  }
}
</script>
