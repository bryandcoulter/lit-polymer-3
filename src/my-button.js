import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

export class MyButton extends PolymerElement {
  static get properties() {
    return {
      clicks: {
        type: Number,
        value: 0,
      },
      message: {
        type: String,
        value: '',
      },
      myClicks: {
        type: Number,
        value: 0,
      },
    };
  }

  static get template() {
    return `
      <button on-click="fire">[[message]]</button>
      <div>My Clicks: [[myClicks]]</div>
      <div>Total Clicks: [[clicks]]</div>
    `;
  }

  fire() {
    this.myClicks++;
    this.dispatchEvent(new CustomEvent('button-fired', {
      bubbles: true,
      composed: true,
    }));
  }
}
customElements.define('my-button', MyButton);
