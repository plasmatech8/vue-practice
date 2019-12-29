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

**Event Handling and Methods**
* We have added an empty list called `guestName` to the `data` object.
* We have added added the `v-on:submit='formSubmitted'` attribute to the HTML form to allow Vue to handle the form.
* We have also added event modifier to the attribute making it `v-on:submit.preventDefault='formSubmitted'`. This removes default behaviour of refreshing the page on submit.
* A new object is added to the Vue object called `methods`. This object will contains a key called `formSubmitted` and the value is a function that handles the form submission. We will make it print the name to the console, add the name to the `guestName` list, and clear the value.
* We will add the guest list to the attendance list.

**List Rendering v-for loop**
* Vue has made it easy to do for-loops.
* We have added `v-for="name in guestName"` to a div element and added `{{ name }}` to the content of the div. The list will be rendered in fancy green boxes.

**Conditional Rending with v-if statement**
* We will add `v-if="guestName.length > 0"` to the div surrounding the list rendering div.
* In the div directly below the `v-if`, we will add `v-else` attribute. This attribute will render the 'No names added yet...' title if guest names exist.

**Binding Variables to Attributes using v-bind directive**
* Used to pass values into attributes/attribute-values of an element. i.e. class and id values.
* We want to change the background colour of the form when the form is submitted - so we need to change the class attribute of the form.
* The class name will be called `formSubmitClass` in the Vue data object and add CSS has been created for the class under the `submitted` class.
* We will bind the `formSubmitClass` variable to the div holding our form using `v-bind:class="formSubmitClass"`.
* We will add code to change the value of `formSubmitClass` to `submitted` when we click the submit button.
* When we click the form submit button.
* We can use v-bind to change the src of an image, changing styles, etc.
