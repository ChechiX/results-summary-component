import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { Results } from '../interfaces/results-interface';

import './summary-item';

@customElement('summary-card')
export class SummaryCard extends LitElement {
  @property({ attribute: false }) items: Results[] = [];

  private categoryColors: Record<string, { bg: string; text: string }> = {
    Reaction: { bg: '#FFF6F6', text: '#FF5555' },
    Memory: { bg: '#FFFBF4', text: '#FFB21E' },
    Verbal: { bg: '#F2FCF9', text: '#00BB8F' },
    Visual: { bg: '#F3F4FD', text: '#1125D6' },
  };

  private getCategoryColors(category: string) {
    return this.categoryColors[category];
  }

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
              .categoryColors=${this.getCategoryColors(item.category)}
            ></summary-item>`,
        )}
      </ul>

      <button class="summary-card__button">Continue</button>
    </section>`;
  }

  static styles = css`
    .summary-card {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (min-width: 48rem) {
        gap: 32px;
        padding: 44.5px 39.64px;
      }

      @media (min-width: 90rem) {
        padding: 44.5px 40px;
      }
    }

    .summary-card__title {
      margin: 0;
      color: var(--navy-950);
      font-size: var(--text-preset-5-font-size-bold);
      line-height: var(--text-preset-5-line-height-bold);
      font-weight: 700;

      @media (min-width: 48rem) {
        font-size: var(--text-preset-4-font-size);
      }
    }

    .summary-card__list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .summary-card__button {
      border-radius: 128px;
      background: var(--navy-950);
      color: var(--white);
      padding: 16.5px 0;
      border: none;
      font-family: inherit;
      font-size: var(--text-preset-5-font-size-bold);
      line-height: var(--text-preset-5-line-height-bold);
      font-weight: 700;
      transition: background 0.5s ease-in-out;
    }

    .summary-card__button:hover {
      background: linear-gradient(to bottom, #7755ff, #2f2ce9);
    }
  `;
}
