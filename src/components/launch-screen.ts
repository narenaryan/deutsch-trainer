import {LitElement, html, customElement} from 'lit-element';
import artist from '../images/artist.png';
import bird from '../images/bird.png';

const perClassStyle = html`
  <style>
  h1 {
    font-size: 200%;
  }

  .row-padding {
    padding-bottom: 5%;
  }

  .center-row {
    margin-top: 45%;
  }

  .start-button {
    background-color: #787A86;
    color: white;
    width: 156px;
    height: 28px;
  }

  .button-text {
    height: 5px;
    left: 204px;
    top: 255px;

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #FFFFFF;
  }

  .image-row {
    margin-top: 360px;
  }
  </style>`

// We are using Google Litelements as we can port them to any framework later
@customElement('launch-screen')
class LaunchScreen extends LitElement {

  // Tell parent component that launch phase is over
  disableLaunchScreen(){
    let event = new CustomEvent('app-started', {
      detail: {
        message: 'App started to proceed'
      }
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      ${perClassStyle}
      <div class="columns">
        <div class="column is-two-thirds">
          <div class="rows">
            <h1 class="row center-row row-padding is-full is-large"> Deutsch Trainer</h1>
            <p class="row row-padding is-full"> Start Learning German with the help of flash cards and daily excercises. </p>
            <button @click="${this.disableLaunchScreen}" class="row row-padding button is-rounded start-button"><span class="button-text">Start</span></button>
          </div>
        </div>
        <div class="column">
          <div class="image-row rows">
            <div class="columns">
              <div class="column">
                <figure class="image is-64x64">
                  <img src="${artist}" />
                </figure>
              </div>
              <div class="column">
                <figure class="image is-64x64">
                  <img src="${bird}" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Without this, Bulma styles cannot be used in component
  // i.e Shadow DOM cannot apply outer CSS styles
  // https://lit-element.polymer-project.org/guide/templates#renderroot
  createRenderRoot() {
    return this;
  }
}

