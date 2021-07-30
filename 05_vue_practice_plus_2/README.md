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

Calling Actions (mapActions) vs Mutations (mapMutations)
* It is fine to use mutation methods
* Actions is best practice, and is used when aysnc logic/interactions is required

Logic chain between child components and stores:
* In the SettingsPage, should the logic chain to go 
  * UserDetailsPanel > SettingsPage (event) > user (store)?
    * (same as on EmployeePage except with no store)
  * Or UserDetailsPanel > user (store)?
    * This would allow us to push a snackbar popup from the page
    * But then the UserDetailsPanel would be tied to the parent
    * But then again, these components can be considered controlled by the parent
  * I think 
    * It is best to keep as much intuitive logic tied to the component logic as possible (i.e. UserDetails == User store and does not rely on props)
  * Actually idk. Do it the same way as in this project.

## Watchers & Computed

Computed - is most used for cached derived data.

Watchers - is sometimes used when state needs to change based on a change in data or computed properties.

In UserDetailsPanel, I added a watcher so that when the user store changes,
and the details are not in edit mode, it will update the cached user details.