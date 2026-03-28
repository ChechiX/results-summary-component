import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('summary-item')
export class SummaryItem extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String }) category = '';
  @property({ type: Number }) score = 0;

  render() {
    return html`<li class="summary-item__item">
      <img
        class="summary-item__icon"
        src="${this.icon}"
        alt="${this.category}"
      />
      <span class="summary-item__category">${this.category}</span>
      <span class="summary-item__score"
        ><strong>${this.score}</strong> / 100</span
      >
    </li>`;
  }

  static styles = css`
    .summary-item__item {
      border-radius: 12px;
      padding: 17.5px 16px;
    }
  `;
}
