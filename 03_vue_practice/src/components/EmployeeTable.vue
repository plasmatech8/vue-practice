<template>
  <div id="employee-table">
    <!-- No employees message -->
    <p v-if="employees.length < 1" class="empty-table">No employees</p>

    <!-- List of employees + Edit/Delete buttons -->
    <table v-else>
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
            <input type="text" v-model="cachedEmployee.name" />
          </td>
          <td v-else>{{ employee.name }}</td>

          <!-- Employee Email -->
          <td v-if="editing === employee.id">
            <input type="text" v-model="cachedEmployee.email" />
          </td>
          <td v-else>{{ employee.email }}</td>

          <!-- Edit/Delete/Save/Cancel Buttons -->
          <td v-if="editing === employee.id">
            <button @click="saveEdit(cachedEmployee)">Save</button>
            <button class="muted-button" @click="cancelEdit()">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="$emit('delete:employee', employee.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "employee-table",
  data() {
    return {
      editing: null, // The employee ID we are editing
      cachedEmployee: null, // The employee object we are editing
    };
  },
  props: {
    employees: Array,
  },
  methods: {
    editMode(employee) {
      this.cachedEmployee = Object.assign({}, employee);
      this.editing = employee.id;
    },
    saveEdit(employee) {
      if (employee.name === "" || employee.email === "") return;
      this.$emit("edit:employee", employee.id, employee);
      this.cancelEdit();
    },
    cancelEdit() {
      this.cachedEmployee = null;
      this.editing = null;
    },
  },
};
</script>

<style scoped></style>
