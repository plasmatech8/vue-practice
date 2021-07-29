# vue-app

Continuing from 04, adding:
* Vuex
* (potentially) Vue 2 Composition API

We will create a settings page with user details stored in the
Vuex global store.

This global store will be used in:
* Settings Page (UserDetailsPanel)
* Appbar layout (GeneralLayout)

## vuex

We need:
* Create `store/index.js`
```js
import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.store({
    modules: {
        user
    }
});
```
* Update `main.js` to import the store object and add to Vue app object
* Create `store/modules/user.js`
* Now we can add the getters to our components using `computed: mapGetters(["user"]),` and access via `:value="user.name"`

In `src/store/modules/user.js`:
* `state` defines our state variables
* `getters` is how we access our state, and are added to computed properties via `mapGetters` 
* `actions` is something we can call to modify our state, and are added to component methods via `mapActions`
* `mutations` are setters which define how our actions. We can apply a mutation in our action via ``