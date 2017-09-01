import { html, render } from 'lit-html';
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import { MyButton } from './my-button';

const clickMessage = 'I have been clicked : ';
export default class LitTest extends PolymerElement {
  static get properties() {
    return {
      message: {
        type: String,
        value: '',
      },
      clicks: {
        type: Number,
        value: 0,
      },
    };
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.message = clickMessage + this.clicks;
  }

  ready() {
    super.ready();
    console.dir(this);
    render(this.generateTemplate(), this.shadowRoot);
    this.addEventListener('button-fired', function () {
      this.clicks++;
      this.message = clickMessage + this.clicks;
      render(this.generateTemplate(), this.shadowRoot);
    });
  }

  generateTemplate() {
    return html`
      <style>
        :host {
          display: block;
          padding: 0 40px;
          margin: 0 auto;
          max-width: 1170px;
        }
        div {
          padding : 15px 30px 14px 30px;
          display : block;
          text-align: center;
        }
        my-button {
          padding : 15px 30px 14px 30px;
          margin  : 5px auto;
          display : block;
          width   : 100px;
        }
      </style>
      <div> ${this.message} </div>
      <my-button clicks="${this.clicks}"></my-button>
    `;
  }
}

window.customElements.define('lit-test', LitTest);
