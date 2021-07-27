<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="employeeWasAdded" />
    <employee-table :employees="employees" />
  </div>
</template>

<script>
import EmployeeTable from "./components/EmployeeTable.vue";
import EmployeeForm from "./components/EmployeeForm.vue";

export default {
  name: "App",
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Richard Hendricks",
          email: "richard@example.com",
        },
        {
          id: 2,
          name: "Bertam Gilfoyle",
          email: "bertam@example.com",
        },
        {
          id: 3,
          name: "Dinesh Chugtai",
          email: "dinesh@example.com",
        },
      ],
    };
  },
  methods: {
    employeeWasAdded(employee) {
      const lastId =
        this.employees.length > 0
          ? this.employees[this.employees.length - 1].id
          : 0;
      const newEmployee = { ...employee, id: lastId + 1 };
      // DONT FORGET: to create new object (rather than using the one given)
      //              or else the object will point to the object in the model
      // DONT FORGET: to add an ID
      this.employees = [...this.employees, newEmployee];
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
