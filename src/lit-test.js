import { html, render } from 'lit-html';
import { Element as PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';
import { MyButton } from './my-button';

export default class LitTest extends PolymerElement {
  static get properties() {
    return {
      myName: {
        type: String,
        value: 'Init name',
      },
      changes: {
        type: Number,
        value: 1,
      },
    };
  }

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.myName = 'Luke';
  }

  ready() {
    super.ready();
    console.dir(this);
    render(this.generateTemplate(), this.shadowRoot);
    this.addEventListener("button-fired", function(){
      console.log('fired');
      this.changes++;
      this.myName = 'Changed ' + this.changes;
      render(this.generateTemplate(), this.shadowRoot);
    });
  }

  generateTemplate() {
    return html`
      <div> ${this.myName} </div>
      <my-button clicks="${this.changes}" on-click="_fire">hi</my-button>
    `;
  }  
}

window.customElements.define('lit-test', LitTest);
