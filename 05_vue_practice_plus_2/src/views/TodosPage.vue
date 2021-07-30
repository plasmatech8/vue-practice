<template>
  <div id="app" class="small-container">
    <h1>Todos</h1>
    <todo-form @add:todo="addTodo" />
    <todo-table :todos="todos" @delete:todo="deleteTodo" />
    <!-- Alert (can place in different components and use events if needed) -->
    <alert-popup type="success" v-model="success">{{ success }}</alert-popup>
    <alert-popup type="error" v-model="error">{{ error }}</alert-popup>
  </div>
</template>

<script>
import TodoTable from "../components/TodoTable.vue";
import TodoForm from "../components/TodoForm.vue";
import AlertPopup from "../components/AlertPopup.vue";

export default {
  name: "todos-page",
  components: {
    TodoTable,
    TodoForm,
    AlertPopup,
  },
  data() {
    return {
      todos: [],
      error: null,
      success: null,
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      try {
        // GET
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error(`Todos endpoint issue (${response.status})`);
        }
        const data = await response.json();
        // Initialise list of todos
        this.todos = data;
      } catch (error) {
        console.error(error);
        this.error = error;
      }
    },
    async addTodo(todo) {
      try {
        // POST
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`,
          {
            method: "POST",
            body: JSON.stringify(todo),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        if (!response.ok) {
          throw new Error(`Todos endpoint issue (${response.status})`);
        }
        const data = await response.json();
        // >>> (increment the ID because the API endpoint does not actually update the database)
        data.id = this.todos.length + 1;
        // <<<
        // Add todos to list
        this.todos = [...this.todos, data];
        this.success = "New todo added!";
      } catch (error) {
        console.error(error);
        this.error = error;
      }
    },
    async deleteTodo(id) {
      try {
        // DELETE
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error(`Todos endpoint issue (${response.status})`);
        }
        // Remove todo from the list
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.success = "Todo deleted!";
      } catch (error) {
        console.error(error);
        this.error = error;
      }
    },
  },
};
</script>

<style >
</style>
