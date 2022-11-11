import { LitElement, html, customElement, state } from "lit-element";

@customElement("my-element")
export class MyElement extends LitElement {
  @state()
  private _count = 0;

  render() {
    return html`
      <button @click=${this._onClick}>Click Count: ${this._count}</button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this._count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
