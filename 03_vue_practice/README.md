# vue-app

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

Vue actions:
* Emit an event `this.$emit('event name', data)`
  * (Use `add:employee` syntax rather than `add-employee`)
* Retrieve an event from any other component `@eventname="methodToCall"`
  * (Used to update a list after submision)
* Get a `ref` element `this.$refs.myRefValue`


DONT FORGET: 
* When recieving data from another component (i.e. via event)
  * to create new object (rather than using the one given) or else the object will point to the object in the model and change based on the component state
* When adding data to a list of objects which is displayed on the page
  * to add an ID