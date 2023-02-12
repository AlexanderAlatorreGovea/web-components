# web-components
This is a repository to practice using native html web components. 

# Web Components Definition

Refers to custom elements, templates, and the shadow DOM of a set of technologies.

## Building Blocks

# Custom Elements

1. Gives us the capability of creating our own custom HTML tags by creating a class within our className by extending HTMLElement. 

2. To bind it you use for example: window.customElement.define('app-drawer', AppDrawer)

3. The life cycle methods you can use are:
    * constructor(): called right away whenever there is an instance of the element that is created or updated. So you would use this to initialize any state you have or add event listeners.

    * connectedCallback(): Called every time when the element is inserted into the DOM.

    * disconnectedCallback(): Called every time the element is removed from the DOM. When you want to remove any event listeners.

    * attributeChangedCallback(attributeName, oldValue, newValue): Called when an attribute is added, removed, updated, or replaced. When you have a custom tag you can pass custom attributes like props.

# Shadow DOM 

1. A web API that allows hidden DOM trees to be attached to elements in the regular DOM tree. This shadow DOM tree starts with a shadow root underneath which you can attach any element in the same way as the normal DOM. 
 
    * Shadow host: the regular DOM node that the shadow DOM is attached to.

    * Shadow tree: the DOM tree inside the shadow DOM.

    * Shadow boundary: the place where the shadow DOM end, and the regular DOM begins.

    * Shadow root: the root node of the shadow tree. 

2. Allows us to encapsulate markup apart from the regular DOM. The styling is separate from the rest of the webpage so any global styles won't affect the shadow DOM. 

3. Create shadow DOM by using your customElement.attachShadow({ mode: open }). This creates the shadowRoot that we can reference and interact with. 

# HTML Templates

* Define the encapsulated markup of our web component.

* Template tag stores markup on a page.
 
* Include both HTML and CSS template

* Use slots to add custom text, or make the template dynamic.

