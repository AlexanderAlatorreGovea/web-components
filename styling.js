const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {
        border: 1px solid red;
        padding: 3rem;
        margin: 2rem;
    }
    h2 {
        color: red;
    }

    /* the three methods have the same specificity whichever one comes second it will win */
    /* shadow root */
    :host {
        background-color: lavender;
        display: block;
    }

    /* apply style only if the host is big-bang-styling */
    :host(big-bang-styling) {
        background-color: red;
    }

    /* host-context(). if one of it's ancestors then the background color will change */
    :host-context(main) {
        background-color: gold;
    }

    /* to style elements that have been inserted inside the component */
    ::slotted(h2) {
        font-size: 5rem;
    }

    /* does not work here */
    ::part() {

    }
  </style>
  <div>
    <h1 part="topper">Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`;

class BigBangStyling extends HTMLElement {
  constructor() {
    super();

    // with open you can do things like querySelector and get tags
    // if the mode is close you cannot get the tags or use document.querySelector
    this.attachShadow({ mode: "open" });

    // true means that you want everything that is inside the template
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }
}

window.customElements.define("big-bang-styling", BigBangStyling);
