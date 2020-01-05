# GuestList

A Simple guest list web app.

## How to view:
1. Open index.html in a browser (or use an live server)
2. If you make a change to the data dictionary in `app.js`, then the values of `{{ attribute }}` in `index.html` will change on reload.

## Progress:

**Vue: The Data object**
* The values of the `data` dictionary in `app.js` will populate `{{ attribute }}` in `index.html`.
* I have made an `event` into a dictionary in `app.js` because it is better practice for when we have multiple different events.

**Two way data-bindings**
* In `index.html`, the `v-model="newNameText"` attribute is added to the text input. This is used to create a 2-way data binding.
* The `newNameText` variable is added to `app.js` so that we can access this value of `newNameText`.
* If we put `{{ newNameText }}` anywhere in the HTML document, it will update in real-time when we change the value of the input box. This value can also be changed via code.

**Vue: The Methods object + Event Handling**
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

**Binding Variables for changing styles**
* We have created `appStyles` variable in the Vue data object which contains the styles for the `.row` class.
* We will remove the style for `.row` in `app.css`.
* We add `v-bind:style="appStyles"` to all elements that require the styling for the `.row` class.

**Short-hand Syntax**
* Replace `v-bind:` with `:`
* Replace `v-on` with `@`

**Outputting text & HTML**
* We can replace `<h4 class="card-title">{{ event.eventTitle }}</h4>` with `<h4 class="card-title" v-text="event.eventTitle"></h4>`.
* v-text will overwrite the contents of the HTML tag with text. Note that {{ data }} is similar to v-text, but allows other hard-coded text to exist.
* We can replace `<p class="card-text">{{ event.signUpText }}</p>` with `<p class="card-text" v-html="event.signUpText"></p>`.
* v-html will overwrite the contents of the HTML tag with HTML. Be careful when using v-html as it can cause cross-site scripting.
* To avoid unnecessary re-rendering, we can use the `v-once` attribute (an empty attribute). This will make the HTML attribute not re-render. We cannot demonstrate this currently and we can only demonstrate this by running in a webserver.

**Using v-show**
* Elements in `v-show` is always added to the DOM, regardless of if the condition is true or false.
* If is a good alternative to `v-if` if you want to keep the elements inside the DOM, but you cannot use `v-else` with it.

**javascript expressions**
* We can use javascript in the `{{}}` sytax. i.e. `{{ name.toLowerCase() + ' is awesome!' }}` or `{{ math.random()/3 }}`
* We can also add this to our `v-html` directives.

**Practice: HTML5 Progress Bar**
* Can be created using: `<progress :max="event.eventCapacity" :value="guestName.length"></progress>`.
* `event.eventCapacity` was added to denote the event max attendance capacity.
