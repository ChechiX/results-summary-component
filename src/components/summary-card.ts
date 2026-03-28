import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('summary-card')
export class SummaryCard extends LitElement {
  render() {
    return html`<section class="summary-card"><h2>Summary</h2></section>`;
  }

  static styles = css`
    .summary-card {
    }
  `;
}
