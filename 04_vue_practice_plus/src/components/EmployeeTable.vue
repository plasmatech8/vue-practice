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
                  v-model="cachedEmployee.name"
                  hint="Name"
                  persistent-hint
                  :error-messages="nameFieldError"
                  :rules="nameRules"
                  required
                />
              </td>
              <td v-else>{{ employee.name }}</td>

              <!-- Employee Email -->
              <td v-if="editing === employee.id">
                <v-text-field
                  dense
                  hint="Email"
                  persistent-hint
                  v-model="cachedEmployee.email"
                  :error-messages="emailFieldError"
                  :rules="emailRules"
                  required
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
      nameFieldError: null,
      emailFieldError: null,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
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
      if (
        this.nameRules.some((func) => func(employee.name)) ||
        this.emailRules.some((func) => func(employee.email))
      ) {
        return console.info("Validation Error for employee edit");
      }
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
