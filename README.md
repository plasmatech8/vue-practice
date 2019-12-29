# Vue Practice

## Tutorial 1

See *Vue.js 2 Academy: Learn Vue Step by Step* by Chris Dixon on SkillShare.

### GuestList

A Simple guest list web app.

How to view:
1. Open index.html in a browser (or use an live server)
2. If you make a change to the data dictionary in `app.js`, then the values of `{{ attribute }}` in `index.html` will change on reload.

Notes:

**The Data object**
* The values of the `data` dictionary in `app.js` will populate `{{ attribute }}` in `index.html`.
* I have made an `event` into a dictionary in `app.js` because it is better practice for when we have multiple different events.

**Two way data-bindings**
* In `index.html`, the `v-model="newNameText"` attribute is added to the text input. This is used to create a 2-way data binding.
* The `newNameText` variable is added to `app.js` so that we can access this value of `newNameText`.
* If we put `{{ newNameText }}` anywhere in the HTML document, it will update in real-time when we change the value of the input box. This value can also be changed via code.