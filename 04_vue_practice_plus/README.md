# vue-app

Continuing from 04, adding:
* Vuetify
* Vue Router
* (potentially) Vuex
* (potentially) Vue 2 Composition API

See:
* https://vuetifyjs.com/en/features/layouts/#usage


Contents: 
- [vue-app](#vue-app)
  - [Vuetify](#vuetify)
    - [Installation](#installation)

## Vuetify

### Installation

* Create a vue app
* Include/install vuetify
* Include/install vue router
````vue
Vue.use(VueRouter)
```
* Include/install material icons for vuetify
```zsh
npm install material-design-icons-iconfont -D
```
```vue
import '@mdi/font/css/materialdesignicons.css'
```