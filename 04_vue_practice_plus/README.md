# vue-app

Continuing from 04, adding:
* Vuetify
* Vue Router
* (next) Vuex
* (next) Vue 2 Composition API

See:
* https://vuetifyjs.com/en/features/layouts/#usage


Contents: 
- [vue-app](#vue-app)
  - [Vuetify](#vuetify)
    - [Installation](#installation)
    - [Details](#details)
  - [Vue Router](#vue-router)
  - [v-model](#v-model)

## Vuetify

### Installation

* Create a vue app
* Include/install vuetify
* Include/install vue router
```vue
Vue.use(VueRouter)
```

* Include/install material icons for vuetify
```zsh
npm install material-design-icons-iconfont -D
```
```vue
import '@mdi/font/css/materialdesignicons.css'
```

### Details 

`EmployeeForm.vue`:
* v-text-field
* v-btn

`EmployeeTable.vue`:
* v-container
* v-card
* v-simple-table
* v-text-field
* v-btn-toggle
* v-btn

`GeneralLayout`:
* v-app
* v-app-bar
* v-main
* v-container
* v-navigation-drawer
* v-list
* v-list-item...

## Vue Router

A routes object is created in `router.js`. 

If a layout is used, a route needs child routes.

It is better to use history mode (rather than hash-based-routing #)

```vue
Vue.use(VueRouter)

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
```

## v-model

v-model is for 2-way bindings.

```vue
<input v-model="something">
```
is essentially the same as:
```vue
<input
   v-bind:value="something"
   v-on:input="something = $event.target.value"
>
```
or (shorthand syntax):
```vue
<input
   :value="something"
   @input="something = $event.target.value"
>
```

We create a prop in our component called `value`.

Then we call an event in our component:  `this.$emit('input', 'some_value');`

We need to use computed values if we want to forward a v-model to child:
```vue
<v-snackbar v-model="inputVal" :color="type" dismissible>

// ...
computed: {
    // Use input value so we can pass v-model into v-model of child
    inputVal: {
      get() {
        return !!this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
```