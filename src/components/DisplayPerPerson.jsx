
const DisplayPerPerson = (props) => {

  let btnActiveStyle = props.bReset ? { background: 'hsl(172, 67%, 45%)', opacity: '1' } : {  background: 'hsl(172, 67%, 45%)', opacity: '0.2' }

  return (

      <aside className="rightPage">
          <div className="total-content">
            <div className="tipAmount">
              <div className="tipAmount--label">Tip Amount<br/><span>/ person</span></div>
              <div className="tipAmount--value" id="tipPerPerson">${props.tipPerPerson}</div>
            </div>              
            <div className="total">
              <div className="total--label">Total<br/><span>/ person</span></div>
              <div className="total--value" id="totalPerPerson">${props.totalPerPerson}</div>
            </div>
            <button className="reset" style={btnActiveStyle} onClick={props.handleClickReset}>Reset</button>
          </div>
        </aside>       
  )
}

export default DisplayPerPerson