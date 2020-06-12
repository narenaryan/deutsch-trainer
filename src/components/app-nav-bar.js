import {LitElement, html, css} from 'lit-element';


// Represents left navigation bar in the app
class AppNavBar extends LitElement {
  // Define all component CSS here
  static get styles(){
    return css`
      :host {
        display: block;
        position: relative;
        width: 108px;
        height: 600px;
        left: 0px;
        top: 0px;
        
        background: #69D0D7;
      }
    `
  }
  
  render() {
    return html`<div></div>`
  }
}

customElements.define('app-nav-bar', AppNavBar);