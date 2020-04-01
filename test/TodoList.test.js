import { createLocalVue, shallowMount, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import { getters, actions } from '~/store'
import TodoList from '~/components/TodoList'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoList Component', () => {
  let store

  beforeEach(() => {
    const state = {
      todos: [{
        id: 'todo-1584926194640',
        text: 'API 방식으로 변경하기',
        completed: true
      }],
      visibility: 'all',
      selectedTodo: null
    }

    store = new Vuex.Store({
      state,
      getters,
      actions
    })
  })

  test('should render data', () => {
    const wrapper = shallowMount(TodoList, {
      store,
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })

    expect(wrapper.findAll('li').length).toBe(1)
  })
})
