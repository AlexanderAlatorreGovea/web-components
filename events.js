/*
only properties that apply to text like font, color, line-height 
and text-align (among others) and visibility are inherited.
*/
const template = document.createElement("template");
template.innerHTML = `
    <style>
      :host{
        /* the shadow root */
        background-color: #333; /* default */
        color: white;
        display: block; /* critical */
      }
      ::slotted(h2){
        /* represents an h2 element that has been placed into a slot */
        font-weight: 300;
      }
      .root{
        position: relative;
        padding: 2rem;
      }
      button{
        font-size: 1.2rem;
        border: none;
        background-color: #222;
        color: #eee;
        padding: 0.25rem 2rem;
        cursor: pointer;
      }
      button:active{
        background-color: #eee;
        color: #222;
      }
      
    </style>
    <div class="root">
      <h1>Big Bang Theory</h1>
      <slot name="title">Default text if not title slot used in HTML</slot>
      <p>
        <button><slot name="done"></slot></button>
      </p>
    </div>
`;

class BigBangEvents extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    // shadowRoot shields the web component from external styling, mostly
    const clone = template.content.cloneNode(true);
    this.root.append(clone);

    // adding event listeners to the slots
    const btnSlot = this.root.querySelector("p button slot");
    const htmlSlot = btnSlot.assignedNodes()[0]; //assignedElements()

    if (htmlSlot) {
      // "slotchanged" runs when something is put inside the slot
      btnSlot.addEventListener("slotchanged", (ev) => {
        console.log(htmlSlot);
      });

      //handling events
      btnSlot.parentElement.addEventListener("click", (ev) => {
        // we want hello() or goodbye()
        // in the window object does it have a property named hello? (window[this.action] === "function")
        const action =
          this.action && typeof window[this.action] === "function"
            ? window[this.action]
            : this.defaultActionForBigBangButton;

        action(ev);
      });
    } else {
      btnSlot.parentElement.remove();
    }
  }

  defaultActionForBigBangButton() {
    throw new Error("Missing a VALID action attribute value");
  }

  // Web Components added or removed from page
  connectedCallback() {
    // when <big-bang> is added to the DOM/page
    console.log("added to page");

    this.color = this.color || "cornflowerblue";
  }

  disconnectedCallback() {
    // when <big-bang> is removed
    console.log("removed from page");
  }

  // Attributes and Properties...
  static get observedAttributes() {
    return ["color", "action"];
  }

  get color() {
    return this.getAttribute("color");
  }

  set color(value) {
    this.setAttribute("color", value);
  }

  get action() {
    return this.getAttribute("action");
  }

  set action(value) {
    this.setAttribute("action", value);
  }

  attributeChangedCallback(attributeName, oldVal, newVal) {
    //method is run when a value is provided to any
    // attribute in the observedAttributes list
    if (attributeName.toLowerCase() === "color") {
      this.style.backgroundColor = newVal;
    }
  }
}

customElements.define("big-bang-events", BigBangEvents);
