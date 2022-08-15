
import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Input from './Components/Input';

function App() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [thirdInput, setThirdInput] = useState("")
  const [fourthInput, setFourthInput] = useState("")
  return (
    <div className="App">
     <Input
      inputType="text"
      inputValue={firstInput}
      setInputValue={setFirstInput}
      />
     <Input
      inputType="number"
      inputValue={secondInput}
      setInputValue={setSecondInput}
      />
     <Input
      inputType="password"
      inputValue={thirdInput}
      setInputValue={setThirdInput}
      />
     <Input
      inputType="range"
      inputValue={fourthInput}
      setInputValue={setFourthInput}
      />

     <div>
      <p>First input:{firstInput}</p>
      <p>Second input:{secondInput}</p>
      <p>Third input:{thirdInput}</p>
      <p>Fourth input:{fourthInput}</p>
     </div>
        <nav>
          <button>One</button>
          <button>Two</button>
          <button>Three</button>
        </nav>
       <div>
        <Card title="1" />
        <Card title="2" />
        <Card title="3" />
       </div>
    </div>
  );
}

export default App;
