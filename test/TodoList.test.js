import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'

import { getters } from '~/store'
import TodoList from '~/components/TodoList'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList Component', () => {
  const getStore = (state, actions) => {
    return new Vuex.Store({
      state,
      getters,
      actions
    })
  }

  const getWrapper = (store) => {
    return shallowMount(TodoList, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
  }

  test('does not render li when store state todos is empty', () => {
    // given
    const state = {
      todos: [],
      visibility: 'all',
      selectedTodo: null
    }
    const store = getStore(state)

    // when
    const wrapper = getWrapper(store)

    // then
    expect(wrapper.findAll('li').length).toBe(0)
  })

  test('render todo when store state todos is not empty', () => {
    // given
    const todo = {
      id: 'todo-1',
      text: 'aadfjadfasdfasdfasdf',
      completed: false
    }
    const state = {
      todos: [todo],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state)

    // when
    const wrapper = getWrapper(store)

    // then
    expect(wrapper.findAll('li').length).toBe(1)
    expect(wrapper.find('li').find('span').text()).toBe(todo.text)
  })

  test('completed checkbox\'s value false when store todo completed value is false.', () => {
    // given
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: false
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state)

    // when
    const wrapper = getWrapper(store)

    // then
    expect(wrapper.find('input[type="checkbox"]').attributes('value')).toBe('false')
  })

  test('completed checkbox\'s value true when store todo completed value is true.', () => {
    // given
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: true
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state)

    // when
    const wrapper = getWrapper(store)

    // then
    expect(wrapper.find('input[type="checkbox"]').attributes('value')).toBe('true')
  })

  test('call store action `toggleTodo` when completed checkbox is clicked', () => {
    // given
    const toggleTodo = jest.fn()
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: false
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state, {
      toggleTodo
    })
    const wrapper = getWrapper(store)

    // when
    wrapper.find('input[type="checkbox"]').trigger('click')

    // then
    expect(toggleTodo).toHaveBeenCalledTimes(1)
  })

  test('call store action `setTodo` when todo is clicked', () => {
    // given
    const setTodo = jest.fn()
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: false
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state, {
      setTodo
    })
    const wrapper = getWrapper(store)

    // when
    wrapper.find('span').trigger('click')

    // then
    expect(setTodo).toHaveBeenCalledTimes(1)
  })

  test('call store action `setTodo` when edit button is clicked ', () => {
    // given
    const setTodo = jest.fn()
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: false
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state, {
      setTodo
    })
    const wrapper = getWrapper(store)

    // when
    wrapper.findAll('button').at(1).trigger('click')

    // then
    expect(setTodo).toHaveBeenCalledTimes(1)
  })

  test('call store action `removeTodo` when delete button is clicked', () => {
    // given
    const removeTodo = jest.fn()
    const state = {
      todos: [{
        id: 'todo-1',
        text: 'aadfjadfasdfasdfasdf',
        completed: false
      }],
      visibility: 'all',
      selectedTodo: null
    }

    const store = getStore(state, {
      removeTodo
    })
    const wrapper = getWrapper(store)

    // when
    wrapper.findAll('button').at(0).trigger('click')

    // then
    expect(removeTodo).toHaveBeenCalledTimes(1)
  })
})
