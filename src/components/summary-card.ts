import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { Results } from '../interfaces/results-interface';

import './summary-item';

@customElement('summary-card')
export class SummaryCard extends LitElement {
  @property({ attribute: false }) items: Results[] = [];

  render() {
    return html`<section class="summary-card">
      <h2 class="summary-card__title">Summary</h2>

      <ul class="summary-card__list">
        ${this.items.map(
          (item) =>
            html`<summary-item
              .icon=${item.icon}
              .category=${item.category}
              .score=${item.score}
            ></summary-item>`,
        )}
      </ul>
    </section>`;
  }

  static styles = css`
    .summary-card {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .summary-card__title {
      margin: 0;
    }

    .summary-card__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;
}
