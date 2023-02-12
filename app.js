const template = document.createElement("template");
// styling doesn't affect web component
template.innerHTML = `
    <style>
        h3 {
            color: blue
        }

        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: darkorchid 5px solid;
        }
    
        .user-card img {
            width: 100%;
        }
    
        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="user-card">
        <img class="image" />
        <div>
            <h3 class="tertiary-title"></h3>
            <div class="info">

                <!-- This text will show up in the slot -->
                    <p><slot name="email" /></p>
                    <p><slot name="phone" /></p>
                <!-- This text will show up in the slot -->

            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    // state
    this.showInfo = true;

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

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector(".info");
    const toggleBtn = this.shadowRoot.querySelector("#toggle-info");

    if (this.showInfo) {
      info.style.display = "block";
      toggleBtn.innerText = "Hide info";
      return;
    }

    info.style.display = "none";
    toggleBtn.innerText = "Show info";
  }

  // adds event listener
  // manipulate the DOM with event listener to hide elements
  connectedCallback() {
    const infoButton = this.shadowRoot.querySelector("#toggle-info");

    infoButton.addEventListener("click", () => this.toggleInfo());
  }

  // removes the event listener
  disconnectedCallback() {
    const infoButton = this.shadowRoot.querySelector("#toggle-info");

    infoButton.removeEventListener();
  }
}

window.customElements.define("user-card", UserCard);
