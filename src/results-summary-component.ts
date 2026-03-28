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
    console.log('results-summary render status:', this._task);

    return this._task.render({
      pending: () => html`<p>Loading...</p>`,
      complete: (results) => {
        const totalScore = results.reduce(
          (acc, result) => Math.floor(acc + result.score / results.length),
          0,
        );

        return html`<main class="result-summary">
          <result-card .score=${totalScore}></result-card>
          <summary-card></summary-card>
        </main>`;
      },
      error: (e) => html`<p>Error: ${e}</p>`,
    });
  }

  static styles = css`
    .result-summary {
      display: grid;
    }
  `;
}
