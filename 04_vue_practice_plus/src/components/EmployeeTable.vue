<template>
  <v-container id="employee-table">
    <!-- No employees message -->
    <p v-if="employees.length < 1" class="empty-table">No employees</p>

    <!-- List of employees + Edit/Delete buttons -->
    <v-card v-else>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Employee name</th>
              <th>Employee email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <!-- Employee Name -->
              <td v-if="editing === employee.id">
                <v-text-field
                  dense
                  type="text"
                  v-model="cachedEmployee.name"
                  :error-messages="nameFieldError"
                  hint="Name"
                  persistent-hint
                />
              </td>
              <td v-else>{{ employee.name }}</td>

              <!-- Employee Email -->
              <td v-if="editing === employee.id">
                <v-text-field
                  dense
                  type="text"
                  v-model="cachedEmployee.email"
                  :error-messages="emailFieldError"
                  hint="Email"
                  persistent-hint
                />
              </td>
              <td v-else>{{ employee.email }}</td>

              <!-- Edit/Delete & Save/Cancel Buttons -->
              <td v-if="editing === employee.id">
                <v-btn-toggle dense value="undefined">
                  <v-btn
                    @click="saveEdit(cachedEmployee)"
                    class="action-btn"
                    color="secondary"
                    >Save</v-btn
                  >
                  <v-btn
                    @click="cancelEdit()"
                    class="action-btn"
                    color="secondary"
                    >Cancel</v-btn
                  >
                </v-btn-toggle>
              </td>
              <td v-else>
                <v-btn-toggle dense>
                  <v-btn @click="editMode(employee)" class="action-btn"
                    >Edit</v-btn
                  >
                  <v-btn
                    @click="$emit('delete:employee', employee.id)"
                    class="action-btn"
                  >
                    Delete
                  </v-btn>
                </v-btn-toggle>
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
  name: "employee-table",
  data() {
    return {
      editing: null, // The employee ID we are editing
      cachedEmployee: null, // The employee object we are editing
      /* errors: {
        nameField: null,
        emailField: null,
      }, */
      nameFieldError: null,
      emailFieldError: null,
    };
  },
  props: {
    employees: Array,
  },
  methods: {
    editMode(employee) {
      this.cachedEmployee = Object.assign({}, employee);
      this.editing = employee.id;
      this.errors = {};
    },
    saveEdit(employee) {
      let hasError = false;
      this.nameFieldError = "";
      this.emailFieldError = "";
      if (employee.name === "") {
        this.nameFieldError = "Invalid Name";
        hasError = true;
      }
      if (employee.email === "") {
        this.emailFieldError = "Invalid Email";
        hasError = true;
      }
      if (hasError) return;
      this.$emit("edit:employee", employee.id, employee);
      this.cancelEdit();
    },
    cancelEdit() {
      this.cachedEmployee = null;
      this.editing = null;
      this.errors = {};
    },
  },
};
</script>

<style scoped>
v-btn {
  margin: 1rem;
}
</style>
