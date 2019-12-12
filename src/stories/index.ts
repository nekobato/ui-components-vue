import {
  LitElement,
  html,
  customElement,
  property,
} from '@polymer/lit-element';

@customElement('countup-button')
export class CountupButton extends LitElement {
  @property() increment = 1;
  @property() val = 0;

  render() {
    return html`
      <style>
        button {
          -webkit-appearance: none;
          padding: 5px 20px;
          border: none;
          background: #9f0;
        }
      </style>
      <button @click="${this.clickHandler}">+${this.increment}</button>
      <p>${this.val}</p>
    `;
  }

  clickHandler() {
    this.val += Number(this.increment);
  }
}
