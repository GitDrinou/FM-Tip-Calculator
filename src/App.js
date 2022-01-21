import { useState } from "react"
import DataEntries from "./components/DataEntries"
import DisplayPerPerson from "./components/DisplayPerPerson"
import Footer from "./components/Footer"
import "./sass/main.scss"


function App() {

  let error = ""
  
  const tips = [5, 10, 15, 25, 50 ]

  // local states
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [customTip, setCustomTip] = useState(0)
  const [numberPerson, setNumberPerson] = useState(0)


  // Event handlers
  const handleChangeGetBill = (e) => { setBill(e.target.value) }
  const handleClickGetTip = (e) => { setTip(e.target.value) }
  const handleChangeCustomTip = (e) => { setCustomTip(e.target.value) }
  const handleChangeGetPerson = (e) => { setNumberPerson(e.target.value) }
  const handleClickReset = () => {
    setBill(0)
    setTip(0)
    setCustomTip(0)
    setNumberPerson(0)
  }

  let valueTip = tip > 0 ? tip : customTip > 0 ? customTip : 0

  // Calculate
  
  let tipAmount = bill > 0 && valueTip > 0 ? (bill * valueTip / 100) : 0
  let tipPerPerson = parseInt(numberPerson) > 0 ? tipAmount / parseInt(numberPerson) : 0
  let totalPerPerson = parseInt(numberPerson) > 0 ? (bill / parseInt(numberPerson)) + tipPerPerson : 0

  // active Reset button
  let bReset = totalPerPerson > 0 ? true : false

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
            bill = {bill}
            numberPerson = {numberPerson}
            tips = {tips} 
            handleChangeGetBill = {handleChangeGetBill}
            handleClickGetTip = {handleClickGetTip}
            handleChangeCustomTip = {handleChangeCustomTip}
            handleChangeGetPerson = {handleChangeGetPerson} 
            error = {error}
            tip = {tip}
            customTip = {customTip}
          />    
          <DisplayPerPerson 
            tipPerPerson = {tipPerPerson.toFixed(2)}
            totalPerPerson = {totalPerPerson.toFixed(2)}
            handleClickReset = {handleClickReset}
            bReset = {bReset}
          />                  
      </div>
    </div>  
    <Footer />    
  </div>
  );
}

export default App;
