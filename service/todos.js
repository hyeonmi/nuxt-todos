import axios from 'axios'

const getTodos = async () => {
  try {
    const req = await axios.get('http://localhost:3000/todos')
    return req.data
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}

const addTodo = async (todo) => {
  try {
    await axios.post('http://localhost:3000/todos', todo)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}

const updateTodo = async (todo) => {
  try {
    await axios.put(`http://localhost:3000/todos/${todo.id}`, todo)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}

const deleteTodo = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/todos/${id}`)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`server error : ${e.error}`)
  }
}

export default {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
}
