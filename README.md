# web-components
This is a repository to practice using native html web components.

## Building Blocks

# Custom Elements

* Gives us the capability of creating our own custom HTML tags by creating a class within our className by extending HTMLElement. 

* To bind it you use for example: window.customElement.define('app-drawer', AppDrawer)

* The life cycle methods you can use are:
1. constructor(): called right away whenever there is an instance of the element that is created or updated. So you would use this to initialize any state you have or add event listeners.

2. connectedCallback(): Called every time when the element is inserted into the DOM.

3. disconnectedCallback(): Called every time the element is removed from the DOM. When you want to remove any event listeners.

4. attributeChangedCallback(attributeName, oldValue, newValue): Called when an attribute is added, removed, updated, or replaced. When you have a custom tag you can pass custom attributes like props.

# Shadow DOM 

# HTML Templates