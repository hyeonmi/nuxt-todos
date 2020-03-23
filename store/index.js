import TodoService from '~/service/todos'

export const state = () => ({
  todos: [],
  visibility: 'all',
  selectedTodo: null
})

export const mutations = {
  INIT_TODOS (state, todos) {
    state.todos = todos
  },
  UPDATE_VISIBILITY (state, visibility) {
    state.visibility = visibility
  },
  SET_EDIT_TODO (state, todo) {
    state.selectedTodo = todo
  }
}

export const actions = {
  async initTodos ({ commit }) {
    const todos = await TodoService.getTodos()
    commit('INIT_TODOS', todos)
  },
  async createTodo ({ commit }, text) {
    await TodoService.addTodo({
      id: `todo-${Date.now()}`,
      text,
      completed: false
    })
  },
  async removeTodo ({ commit }, id) {
    await TodoService.deleteTodo(id)
    const todos = await TodoService.getTodos()
    commit('INIT_TODOS', todos)
  },
  async editTodo ({ commit, state }, text) {
    await TodoService.updateTodo({
      ...state.selectedTodo,
      text
    })
    commit('SET_EDIT_TODO', null)
  },
  async toggleTodo ({ commit, state }, id) {
    const todo = state.todos.find(todo => todo.id === id)
    await TodoService.updateTodo({
      ...todo,
      completed: !todo.completed
    })

    const todos = await TodoService.getTodos()
    commit('INIT_TODOS', todos)
  },
  removeCompletedTodo ({ commit, state }) {
    const completedTodos = state.todos.filter(todo => todo.completed)
    const promiseAll = completedTodos.map(todo => TodoService.deleteTodo(todo.id))

    Promise.all(promiseAll)
      .then(async () => {
        const todos = await TodoService.getTodos()
        commit('INIT_TODOS', todos)
      })
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
