const template = document.createElement("template");
template.innerHTML = `
  <div>
    <slot name="list"></slot>
    <h1>Big Bang Theory</h1>
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
`;

class BigBangStyling extends HTMLElement {
  constructor() {
    super();

    // with open you can do things like querySelector and get tags
    // if the mode is close you cannot get the tags or use document.querySelector
    const shadowRoot = this.attachShadow({ mode: "open" });

    // true means that you want everything that is inside the template
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

window.customElements.define("big-bang-styling", BigBangStyling);
