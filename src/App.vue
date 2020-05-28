<template>
  <div id="app">
    <h1>Vue To-Do</h1>
    <input type="text" placeholder="Add To Do..." v-model="userInput">
    <button type="button" v-on:click="addTodo">Add {{ userInput }}</button>
    <ul>
      <li
        v-for="todo in todos"
        v-bind:class="{ completed: todo.completed }"
        v-on:click="completedTodo(todo)">{{ todo.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      todos: [],
      userInput: ''
    }
  },
  methods: {
    addTodo () {
      if (this.userInput.trim() === '') {
        return
      }
      const newTodo = {
        id: _.uniqueId(),
        name: this.userInput,
        completed: false
      }
      this.todos.push(newTodo)
    },
    deleteTodo (todo) {
      const id = todo.id
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === id) {
          this.todos.splice(i, 1)
          break
        }
      }
    },
    completedTodo (todo) {
      const id = todo.id
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === id) {
          this.todos[i].completed = !this.todos[i].completed
          console.log(this.todos[i].completed)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #00e000;
$secondary-color: #003400;
$font: 'Cairo', sans-serif;

#app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: $font;
  color: $primary-color;

  h1 {
    color: black;
    background-color: $primary-color;
    min-width: 30%;
    margin-bottom: 3rem;
    border-radius: 100px;
  }

  input {
    font-size: 2rem;
    font-family: $font;
    color: inherit;
    text-align: center;
    background-color: inherit;
    border: none;
    border-bottom: 2px solid $primary-color;
    outline: none;
    min-width: 30%;

    &::placeholder {
      text-align: center;
      color: $secondary-color;
    }
  }

  button {
    font-size: 1.5rem;
    font-family: $font;
    color: $primary-color;
    text-align: center;
    border: 0.15rem solid $primary-color;
    border-radius: 50px;
    background: none;
    background-color: none;
    background-image: none;
    min-width: 30%;
    cursor: pointer;
    padding: 0 2rem;
    margin: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover{
        color: black;
        background-color: $primary-color;
    }
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
    min-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      list-style: none;
      text-align: center;
      font-size: 1.5rem;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 50px;
      margin: 1rem 0;

      &:hover {
        border: 1px solid $primary-color;
      }
    }

    .completed {
      background-color: $primary-color;
      border: 1px solid $primary-color;
      color: black;
    }
  }
}
</style>
