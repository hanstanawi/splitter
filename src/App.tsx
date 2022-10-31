import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  /**
   * const totalTip = totalPrice * tipPercentage
   * const tipPerPerson = totalTip / totalPeople
   * const totalPricePerPerson = tipPerPerson + (totalPrice / totalPeople)
   */

  return (
    <div className='App'>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
