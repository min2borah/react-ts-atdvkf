import * as React from 'react';
import './style.css';
import { runtest } from './test-case.js';

export default function App() {
  React.useEffect(() => {
    runtest();
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
