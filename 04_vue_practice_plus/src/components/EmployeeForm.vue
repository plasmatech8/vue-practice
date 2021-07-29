<template>
  <v-container>
    <v-card id="employee-form" class="pa-2">
      <!-- Title -->
      <v-card-title>Add New Employee</v-card-title>
      <!-- Fields -->
      <v-card-text>
        <v-form @submit.prevent="handleSubmit" ref="form" class="mb-2">
          <v-row>
            <v-col>
              <v-text-field
                v-model="employee.name"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
                ref="firstItem"
              />
            </v-col>
            <v-col>
              <v-text-field
                v-model="employee.email"
                :rules="emailRules"
                label="Email"
                required
              />
            </v-col>
          </v-row>
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
  name: "employee-form",
  data() {
    return {
      error: null,
      success: null,
      employee: { name: "", email: "" },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    submit() {
      // Validation
      if (!this.validate()) {
        return;
      }

      // Trigger events
      this.$refs.firstItem.focus();
      this.$emit("add:employee", this.employee);
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