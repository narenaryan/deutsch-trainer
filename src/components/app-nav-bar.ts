import {LitElement, html, css, customElement} from 'lit-element';


// Represents left navigation bar in the app
@customElement('app-nav-bar')
export class AppNavBar extends LitElement {
  // Define all component CSS here
  public static get styles(){
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
