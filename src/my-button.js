import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyButton extends PolymerElement {
  static get properties() {
    return {
      clicks: {
        type: Number,
        value: 0,
      },
    };
  }

  static get template() {
    return `
      <button on-click="fire">Click count [[clicks]]</button>
    `;
  }

  fire() {
    this.dispatchEvent(new CustomEvent('button-fired', {
      bubbles: true,
      composed: true,
    }));
  }
}
customElements.define('my-button', MyButton);
