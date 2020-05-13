class UserElement extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
        <style>
            .username {
              font-size: 2em;
            }
        </style>
        <div class="username"></div>
    `;

    this._username = shadowRoot.querySelector(".username");
  }

  // 変更を監視
  // 変更 or 初期化でattributeChangedCallbackが動く
  static get observedAttributes() {
    return ["username"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const username = this.getAttribute("username");

    this._username.textContent = username;
  }
}

customElements.define('user-element', UserElement)