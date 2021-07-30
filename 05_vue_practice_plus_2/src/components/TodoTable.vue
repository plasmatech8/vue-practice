<template>
  <v-container id="todo-table">
    <!-- No todos message -->
    <p v-if="todos.length < 1" class="empty-table">No todos</p>

    <!-- List of todos + Delete buttons -->
    <v-card v-else>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <!-- Todo Title -->
              <td>{{ todo.title }}</td>

              <!-- Delete Button -->
              <td>
                <v-btn
                  @click="$emit('delete:todo', todo.id)"
                  class="action-btn"
                >
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "todo-table",
  data() {
    return {};
  },
  props: {
    todos: Array,
  },
  methods: {},
};
</script>

<style scoped>
v-btn {
  margin: 1rem;
}
</style>
