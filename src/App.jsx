import React from 'react';
import SimpleCounterComponent from './SimpleCounter';
import PureCounterComponent from './PureCounter';

function App() {
  return (
    <div>
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;