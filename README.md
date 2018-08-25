# Simple-React-Modals
Simple React Modals that does not leave junk in the DOM.

# Demo :)
https://johntendik.github.io/Simple-React-Modals/

# Usage

`import Modal from './Modal/Modal';`

...

In your components' state: 

`this.state = {
  ...
  modals: []
}`

modals can be named anything, just remember when you're adding the modals component, it needs that as the data prop

`<Modal data={this.state.modals} confirm={this.MyconfirmCallbackFunction}/>`

cofirm prop should be a function which will be called when the confirm button is clicked in the modal 

How to launch modals?

```
let options: {
  title: 'my modal title'
}
let currentModals = this.state.modals; 
currentModals.push(options)
this.setState({modals: currentModals});
```

pushing a new object full of options will launch a new modal. You can push as many modals as you like. I got as far as 129 before I ran out of screen space. 
