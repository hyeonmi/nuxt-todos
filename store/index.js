export const state = () => ({
  todos: [],
  visibility: 'all',
  selectedTodo: null
})

export const mutations = {
  ADD_TODO (state, todo) {
    state.todos.push(todo)
  },
  REMOVE_TODO (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  EDIT_TODO (state, text) {
    state.selectedTodo.text = text
    const findIndex = state.todos.findIndex(
      todo => todo.id === state.selectedTodo.id
    )
    state.todos.splice(findIndex, 1, state.selectedTodo)
    state.selectedTodo = null
  },
  TOGGLE_TODO (state, id) {
    const todo = state.todos.find(todo => todo.id === id)
    todo.completed = !todo.completed
  },
  REMOVE_COMPLETED_TODO (state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  },
  UPDATE_VISIBILITY (state, visibility) {
    state.visibility = visibility
  },
  SET_EDIT_TODO (state, todo) {
    state.selectedTodo = todo
  }
}

export const actions = {
  createTodo ({ commit }, text) {
    commit('ADD_TODO', {
      id: `todo-${Date.now()}`,
      text,
      completed: false
    })
  },
  removeTodo ({ commit }, id) {
    commit('REMOVE_TODO', id)
  },
  toggleTodo ({ commit }, id) {
    commit('TOGGLE_TODO', id)
  },
  editTodo ({ commit }, text) {
    commit('EDIT_TODO', text)
  },
  removeCompletedTodo ({ commit }) {
    commit('REMOVE_COMPLETED_TODO')
  },
  updateVisibility ({ commit }, visibility) {
    commit('UPDATE_VISIBILITY', visibility)
  },
  setTodo ({ commit }, todo) {
    commit('SET_EDIT_TODO', todo)
  }
}
export const getters = {
  getFilteredTodos (state) {
    const { visibility } = state
    if (visibility === 'active') {
      return state.todos.filter(todo => !todo.completed)
    } else if (visibility === 'completed') {
      return state.todos.filter(todo => todo.completed)
    } else {
      return state.todos
    }
  },
  todo (state, id) {
    return state.todos.finde(todo => todo.id === id)
  },
  completedCount (state) {
    return state.todos.filter(todo => todo.completed).length
  }
}
