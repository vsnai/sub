import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("sub-element")
export class SubElement extends LitElement {
  @state()
  count = 3;

  connectedCallback(): void {
    super.connectedCallback();

    setTimeout(() => (this.count = 2), 1000);
    setTimeout(() => (this.count = 1), 2000);
    setTimeout(() => (this.count = 0), 3000);
    setTimeout(() => {
      console.log("message posted ...");
      postMessage("https://jsonplaceholder.typicode.com/todos/1", "*");
    }, 4000);
  }

  render() {
    return html`<div>${this.count}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sub-element": SubElement;
  }
}
