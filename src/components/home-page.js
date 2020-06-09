import {LitElement, html} from 'lit-element';

// We are using Google Litelements as we can port them to any framework later
class Home extends LitElement {
  render() {
    return html`<p>template content</p>`;
  }
}

// This line defines a custom web component to use in index.html
customElements.define('home-page', Home)
