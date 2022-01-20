
const DisplayPerPerson = (props) => {

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
              <button className="reset">Reset</button>
            </div>
          </aside>       
    )
}

export default DisplayPerPerson