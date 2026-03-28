import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('result-card')
export class ResultCard extends LitElement {
  @property({ type: Number }) score = 0;

  render() {
    return html`<section class="result">
      <h1>Your Result</h1>

      <div class="result__score">
        <p>${this.score} <span>of 100</span></p>
      </div>

      <div class="result__feedback">
        <h2>Great</h2>

        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>`;
  }

  static styles = css`
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
    }

    span {
      display: block;
    }

    .result__feedback {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `;
}
