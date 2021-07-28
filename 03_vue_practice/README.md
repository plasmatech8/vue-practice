# vue-app

Tutorial:
* [Vue Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-vue/) by Tania Rascia. A good tutorial :).

Contents: 
- [vue-app](#vue-app)
  - [Getting Started](#getting-started)
  - [Cheatsheet](#cheatsheet)
  - [Notes](#notes)

## Getting Started

Template created via:
```zsh
git config --global user.name "Your Name"
vue create vue-app
```

Template NPM commands:
```zsh
npm install
npm run serve    # Dev server 
npm run build
npm run lint     # Lint
```

## Cheatsheet

Anatomy of `.vue` files:
* Template
* Script
* Style

Vue template syntax:
* Local variable binding `v-bind:` (`:`)
* For loops `v-for:`
* Model data binding `v-model:`
* Event listeners `v-on:` (`@`, e.g. `@click.prevent`)
* Conditionals `v-if`, `v-if-else`, `v-else`
* References `ref=` an ID to put on an element so it can be referenced in code

Vue object attributes:
* Data model `data() { return { ... } }`
* Methods `methods: { ... }`
* Computed properties `computed: { ... }` for simple automatic functions computed on every state change
* On mount lifecycle hook `mounted(){ ... }`

Vue actions:
* Emit an event `this.$emit('event name', data)`
  * (Use `add:employee` syntax rather than `add-employee`)
* Retrieve an event from any other component `@eventname="methodToCall"`
  * (Used to update a list after submision)
* Get a `ref` element `this.$refs.myRefValue`

## Notes

DONT FORGET: 
* When recieving data from another component (i.e. via event)
  * to create new object (rather than using the one given) or else the object will point to the object in the model and change based on the component state
* When adding data to a list of objects which is displayed on the page
  * to add an ID

We will use Vue Events `@do:something` to update the `EmployeeTable` component, by triggering an event anywhere in the application.

Notes:
* I feel that external logic should be placed at the source of activation
  * (i.e. when button is clicked, activate the logic using component methods and/or utility methods - Do not use events triggered elsewhere in the DOM to submit database records - actually, this might not be so much of a problem since event forwarding needs to defined on the parent)
  * But then again, a centralised location/app object is pretty good to have...
  * Any internal app logic like lists and UI can be updated using events
* The `jsonplaceholder.typicode.com/users` endpoint allows you to PUT, POST, DELETE, GET employees, but it WILL NOT UPDATE THE DATABASE.
  * So, if you create a new user, you cannot edit the user because it does not actually exist 
