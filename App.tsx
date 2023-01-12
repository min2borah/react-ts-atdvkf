import * as React from 'react';
import './style.css';
import { runPreviewtest, runScenariotest } from './test-case.js';
import * as utils from './utils/utils.js';

export default function App() {
  React.useEffect(() => {
    // runPreviewtest();
    // runScenariotest();
  }, []);
  const dateStr = utils.filterDecimalPart('11.01');

  return (
    <div>
      <h1>{dateStr}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
