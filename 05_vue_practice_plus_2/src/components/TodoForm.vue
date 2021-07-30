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
import { ref, onMounted } from "@vue/composition-api";

export default {
  components: {},
  name: "todo-form",

  setup(_, context) {
    const todo = ref({ title: "" });
    const form = ref(null);
    const firstItem = ref(null);

    function submit() {
      // Validation
      if (!this.validate()) {
        return;
      }
      // Trigger events
      firstItem.value.focus();
      context.emit("add:todo", todo.value);
      reset();
    }
    function validate() {
      return form.value.validate();
    }
    function reset() {
      form.value.reset();
    }

    onMounted(() => {});

    return {
      todo,
      firstItem,
      form,
      submit,
      validate,
      reset,
    };
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