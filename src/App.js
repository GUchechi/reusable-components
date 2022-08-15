
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
       <div>
        <Card />
        <Card />
        <Card />
       </div>
    </div>
  );
}

export default App;
