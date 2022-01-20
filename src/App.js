import { useState } from "react"
import DataEntries from "./components/DataEntries"
import DisplayPerPerson from "./components/DisplayPerPerson"
import "./sass/main.scss"


function App() {

  let error = ""
  
  const tips = [5, 10, 15, 25, 50 ]

  // local states
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [numberPerson, setNumberPerson] = useState(0)
  // const [totalTipPerPerson, setTotalTipPerPerson] = useState(0)
  // const [totalPerPerson, setTotalPerPerson] = useState(0)


  // Event handlers
  const handleChangeGetBill = (e) => { setBill(e.target.value) }
  const handleClickGetTip = (e) => { setTip(e.target.value) }
  const handleChangeGetPerson = (e) => { setNumberPerson(e.target.value) }


  // Calculator

  let tipAmount = (bill * tip / 100)
  let tipPerPerson = tipAmount / parseInt(numberPerson)
  let totalPerPerson = (bill / parseInt(numberPerson)) + tipPerPerson

 
  console.log(tipAmount, tipPerPerson.toFixed(2), totalPerPerson)

  // Error condition
  if (bill > 0 && numberPerson === 0) { 
    error = "Can't be zero !" 
  }
  else {
    error = ""
  }

  return (
    <div>
    <div className="container">
      <h1 className="title">SPLITTER</h1>
      <div className="content">
          <DataEntries 
            tips = {tips} 
            handleChangeGetBill = {handleChangeGetBill}
            handleClickGetTip = {handleClickGetTip}
            handleChangeGetPerson = {handleChangeGetPerson} 
            error = {error}
            tip = {tip}
          />    
          <DisplayPerPerson 
            tipPerPerson = {tipPerPerson.toFixed(2)}
            totalPerPerson = {totalPerPerson.toFixed(2)}
          />                  
      </div>
    </div>  
    
    <footer>
      <div>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a></div>
      <div>Coded by <a href="https://gitdrinou.github.io/" target="_blank" rel="noreferrer">Sandrine@GitDrinou</a></div>
    </footer>
  </div>
  );
}

export default App;
