import React from 'react';
import Button from './components/Button/Button';

const App: React.FC = () => {
  return (
    <div>
      <h1>CSS Modules Example</h1>
      
      <h5>This is a global h5</h5>
      <button>This is a global button</button>
      
      <hr />
      
      <Button 
        title="CSS Module Button" 
        label="Click me!" 
        onClick={() => alert('Button clicked!')} 
      />
    </div>
  );
};

export default App;
