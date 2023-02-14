class BlueBox extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });

    let div = document.createElement("div");
    div.className = "bb";
    div.textContent = "I AM A BLUE BOX";

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(`.bb { 
        color: white; 
        background-color: cornflowerblue;
        padding: 1rem;
        font-size: 2rem;
        margin-block: 1rem;
      }`);
    this.root.adoptedStyleSheets = [sheet];
    this.root.append(div);
  }
}

customElements.define("blue-box", BlueBox);
