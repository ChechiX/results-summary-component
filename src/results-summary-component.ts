import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { Task } from '@lit/task';

import type { Results } from './interfaces/results-interface';

import './components/result-card';
import './components/summary-card';

@customElement('results-summary-component')
export class ResultsSummaryComponent extends LitElement {
  private _task = new Task(this, {
    task: async () => {
      const response = await fetch('/data.json');

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<Results[]>;
    },
    args: () => [],
  });

  render() {
    return this._task.render({
      pending: () => html`<p>Loading...</p>`,
      complete: (results) => {
        const totalScore = results.reduce(
          (acc, result) => acc + result.score,
          0,
        );

        const averageScore = Math.floor(totalScore / results.length);

        return html`<main class="result-summary">
          <result-card score=${averageScore}></result-card>

          <summary-card .items=${results}></summary-card>
        </main>`;
      },
      error: (e) => html`<p>Error: ${e}</p>`,
    });
  }

  static styles = css`
    .result-summary {
      display: grid;
      gap: 24px;

      @media (min-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0;
        background-color: var(--white);
        border-radius: 32px;
        box-shadow: 0 30px 60px 0 rgba(61, 108, 236, 0.15);
      }
    }
  `;
}
