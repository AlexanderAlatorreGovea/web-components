const template = document.createElement("template");
// styling doesn't affect web component
template.innerHTML = `
    <style>
        h3 {
            color: blue
        }
    </style>
    <div class="user-card">
        <img class="image" />
        <div>
            <h3 class="tertiary-title"></h3>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    // create shadow DOM
    this.attachShadow({ mode: "open" });

    // appends template to shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // now that the shadow root is appended you have access to this.getAttribute and
    // can select with document.querySelector()
    this.shadowRoot.querySelector(".tertiary-title").innerText =
      this.getAttribute("name");

    // attach an image to the template
    this.shadowRoot.querySelector(".image").src = this.getAttribute("avatar");
  }
}

window.customElements.define("user-card", UserCard);
