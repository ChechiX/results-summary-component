import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('summary-item')
export class SummaryItem extends LitElement {
  @property({ type: String }) icon = '';
  @property({ type: String }) category = '';
  @property({ type: Number }) score = 0;
  @property({ attribute: false }) categoryColors: { bg: string; text: string } =
    { bg: '', text: '' };

  render() {
    return html`<li
      class="summary-item__item"
      style="background-color: ${this.categoryColors.bg}; color: ${this
        .categoryColors.text}"
    >
      <div class="summary-item__category-info">
        <img
          class="summary-item__icon"
          src="${this.icon}"
          alt="${this.category}"
        />

        <span class="summary-item__category">${this.category}</span>
      </div>

      <span class="summary-item__score"
        ><strong>${this.score}</strong> / 100</span
      >
    </li>`;
  }

  static styles = css`
    .summary-item__item {
      border-radius: 12px;
      padding: 17.5px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--text-preset-6-font-size-medium);
      line-height: var(--text-preset-6-line-height-medium);

      @media (min-width: 48rem) {
        font-size: var(--text-preset-5-font-size-medium);
        padding: 16.5px 16.86px;
      }
    }

    .summary-item__category-info {
      display: flex;
      gap: 16px;
    }

    .summary-item__category {
      font-weight: 500;
    }

    .summary-item__score {
      color: var(--navy-200);
      font-weight: 700;
    }

    strong {
      color: var(--navy-950);
    }
  `;
}
