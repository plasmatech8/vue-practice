<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from "../components/EmployeeTable.vue";
import EmployeeForm from "../components/EmployeeForm.vue";

export default {
  name: "App",
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    async getEmployees() {
      try {
        // GET
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Employees endpoint issue (${response.status})`);
        }
        const data = await response.json();
        // Initialise list of employees
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
    },
    async addEmployee(employee) {
      try {
        // POST
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(employee),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        if (!response.ok) {
          throw new Error(`Employees endpoint issue (${response.status})`);
        }
        const data = await response.json();
        // >>> (increment the ID because the API endpoint does not actually update the database)
        data.id = this.employees.length + 1;
        // <<<
        // Add employee to list
        this.employees = [...this.employees, data];
      } catch (error) {
        console.error(error);
      }
    },
    async editEmployee(id, updatedEmployee) {
      try {
        // PUT
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedEmployee),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        if (!response.ok) {
          throw new Error(`Employees endpoint issue (${response.status})`);
        }
        const data = await response.json();
        // Update employee in the list
        this.employees = this.employees.map((employee) =>
          employee.id === id ? data : employee
        );
      } catch (error) {
        console.error(error);
      }
    },
    async deleteEmployee(id) {
      try {
        // DELETE
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error(`Employees endpoint issue (${response.status})`);
        }
        // Remove employee from the list
        this.employees = this.employees.filter(
          (employee) => employee.id !== id
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
