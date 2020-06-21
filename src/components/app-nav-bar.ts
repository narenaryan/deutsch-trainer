import { LitElement, html, css, customElement, property } from 'lit-element';
import artist from '../images/artist.png';
import bird from '../images/bird.png';

// Represents left navigation bar in the app
@customElement('app-nav-bar')
export class AppNavBar extends LitElement {

  public static get styles() {
    return css`
      /* Selects the host element */
      .shadow-root {
        display: block;
        position: relative;
        height: 600px;
        left: 0px;
        top: 0px;
        
        background: #69D0D7 !important;
      }
    `;
  }
  
  render() {
    return html`
      <style>
        :host {
          padding: 4px;
          background-color: gray;
        }

      </style>
        <div class='shadow-root'>
          <div class="rows">
            <div class="row center-row row-padding is-full ">
            <figure class="image is-64x64">
                  <img src="${artist}" />
                </figure>
            </div>
            <div class="row center-row row-padding is-full ">
            <figure class="image is-64x64">
                  <img src="${bird}" />
                </figure>
            </div>
          </div>
        </div>`
  }

  createRenderRoot() {
    return this;
  }
}
