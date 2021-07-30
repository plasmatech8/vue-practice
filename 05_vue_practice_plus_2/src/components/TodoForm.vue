<template>
  <v-container>
    <v-card id="todo-form" class="pa-2">
      <!-- Title -->
      <v-card-title>Add New Todo</v-card-title>
      <!-- Fields -->
      <v-card-text>
        <v-form @submit.prevent="handleSubmit" ref="form" class="mb-2">
          <v-text-field
            v-model="todo.title"
            :counter="10"
            label="Title"
            required
            ref="firstItem"
          />
        </v-form>
      </v-card-text>
      <!-- Action buttons -->
      <v-card-actions>
        <v-btn @click="submit">Add</v-btn>
        <v-btn @click="reset">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  components: {},
  name: "todo-form",
  data() {
    return { todo: {} };
  },
  methods: {
    submit() {
      // Validation
      if (!this.validate()) {
        return;
      }

      // Trigger events
      this.$refs.firstItem.focus();
      this.$emit("add:todo", this.todo);
      this.reset();
      this.error = true;
    },
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}

.has-error {
  border-block-color: red;
}
</style>