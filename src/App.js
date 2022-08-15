
import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Input from './Components/Input';

function App() {
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [thirdInput, setThirdInput] = useState("")
  const [fourthInput, setFourthInput] = useState("")

  const [active, setActive] = useState("FirstCard")
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
          {active === FirstCard &&  <Card title="1" />}
          {active === SecondCard &&  <Card title="2" />}
          {active === ThirdCard &&  <Card title="3" />}
        </div>
       <div>
       </div>
    </div>
  );
}

export default App;
