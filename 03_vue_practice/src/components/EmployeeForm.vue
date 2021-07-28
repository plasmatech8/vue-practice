<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <!-- Fields -->
      <div>
        <label>Employee Name</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="employee.name"
          @focus="clearStatus"
          @keypress="clearStatus"
          ref="firstItem"
        />
      </div>
      <div>
        <label>Employee Email</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidEmail }"
          v-model="employee.email"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
      </div>

      <!-- Success/Error Message -->
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Employee successfully added
      </p>

      <!-- Submit -->
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      employee: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Submitting
      this.submitting = true;
      this.clearStatus();

      // Submitting + Error
      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }

      // Trigger events
      this.$refs.firstItem.focus();
      this.$emit("add:employee", this.employee);

      // Success
      this.error = false;
      this.success = true;
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },

  computed: {
    invalidName() {
      return this.employee.name === "";
    },
    invalidEmail() {
      return this.employee.email === "";
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