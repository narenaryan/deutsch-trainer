import { LitElement, html, css, customElement, property } from 'lit-element';


@customElement('app-dashboard')
export class AppDashboard extends LitElement {

  @property({
    type: Boolean
  })
  isLaunchScreenActive = true;
  
  hideLaunchScreen() {
    this.requestUpdate
    this.isLaunchScreenActive = false;
  }

  // Render Launch screen on startup. If not, then set sample screen
  render() { 
    return html `
          ${this.isLaunchScreenActive
            ? html`
            <div class="columns">
              <div class="column is-one-fifth">
              </div>
              <div class="column">
                <launch-screen @app-started=${this.hideLaunchScreen}></launch-screen>    
              </div>
            </div>
          `: html`
            <div class="columns">
                <div class="column is-one-fifth">
                  <app-nav-bar></app-nav-bar>
                </div>
                <div class="column">
                <sample-tile-view></sample-tile-view>
                </div>
            </div>
           `}
          `
  }

  // To make global styles pierce into this shadow tree
  createRenderRoot() {
    return this;
  }
}