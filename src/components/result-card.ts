import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { resetStyles } from '../styles/reset.styles';

@customElement('result-card')
export class ResultCard extends LitElement {
  @property({ type: Number }) score = 0;

  render() {
    return html`<section class="result">
      <h1>Your Result</h1>

      <div class="result__score">
        <p class="result__score-value">${this.score} <span>of 100</span></p>
      </div>

      <div class="result__feedback">
        <h2>Great</h2>

        <p class="result__feedback-text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>`;
  }

  static styles = [
    resetStyles,
    css`
      h1,
      p,
      h2 {
        margin: 0;
      }

      .result {
        padding: 32px 57.5px;
        box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        text-align: center;
        background: linear-gradient(to bottom, #7755ff, #2f2ce9);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        height: 100%;

        @media (min-width: 48rem) {
          border-radius: 32px;
          padding: 45px 69px;
          gap: 32px;
          box-shadow: unset;
        }
      }

      h1 {
        color: var(--navy-200);
        font-weight: 700;
        font-size: var(--text-preset-5-font-size-bold);
        line-height: var(--text-preset-5-line-height-bold);

        @media (min-width: 48rem) {
          font-size: var(--text-preset-4-font-size);
        }
      }

      .result__score {
        width: 140px;
        height: 140px;
        background: linear-gradient(
          to bottom,
          rgba(77, 33, 201, 1),
          rgba(37, 33, 201, 0)
        );
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);

        @media (min-width: 48rem) {
          width: 200px;
          height: 200px;
        }
      }

      .result__score-value {
        font-size: var(--text-preset-2-font-size);
        line-height: var(--text-preset-2-line-height);
        font-weight: 800;

        @media (min-width: 48rem) {
          font-size: var(--text-preset-1-font-size);
        }
      }

      span {
        display: block;
        color: var(--navy-200);
        font-size: var(--text-preset-6-font-size-bold);
        line-height: var(--text-preset-6-line-height-bold);
        font-weight: 700;

        @media (min-width: 48rem) {
          font-size: var(--text-preset-5-font-size-bold);
        }
      }

      .result__feedback {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      h2 {
        color: var(--white);
        font-size: var(--text-preset-4-font-size);
        line-height: var(--text-preset-4-line-height);
        font-weight: 700;

        @media (min-width: 48rem) {
          font-size: var(--text-preset-3-font-size);
        }
      }

      .result__feedback-text {
        color: var(--navy-200);
        font-size: var(--text-preset-6-font-size-medium);
        line-height: var(--text-preset-6-line-height-medium);
        font-weight: 500;

        @media (min-width: 48rem) {
          font-size: var(--text-preset-5-font-size-medium);
        }
      }
    `,
  ];
}
