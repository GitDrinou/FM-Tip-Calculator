

const DataEntries = (props) => {

    let error = props.error
    let tip = props.tip

    let inputStyleError = (error !== "" ) ? { background: 'rgba(183,0,0,0.4)' } : { background: 'transparent' }
    let tipStyleBgActive = { background: 'hsl(172, 67%, 45%)', color: 'hsl(183, 100%, 15%)' } 

    let valBill = props.bill > 0 ? props.bill : ""
    let valPerson = props.numberPerson > 0 ? props.numberPerson : ""
    let valTip = props.tip > 0 ? props.tip : ""
    let valCustomTip = props.customTip > 0 ? props.customTip : ""

    return (

        <section className="leftPage">
            <h3>Bill</h3>
            <div className="amount">
              <span>$</span>
              <input type="text" id="amount" placeholder="0" onChange={props.handleChangeGetBill} value={valBill} />
            </div>
            <h3>Select Tip %</h3>
            <div className="tips-container">
              <ul className="tips">
                { props.tips.map((item, index) => (
                    tip === item ? (
                        <li key={`tips_${index}`} value={item} onClick={props.handleClickGetTip} style={tipStyleBgActive}>{item}%</li>
                    ) : ( 
                        <li key={`tips_${index}`} value={item} onClick={props.handleClickGetTip}>{item}%</li>
                    )
                  
                ))}
                <li><input type="text" id="tipsCustom" placeholder="Custom" onChange={props.handleChangeCustomTip} value={valCustomTip} /></li>
              </ul>
            </div>
            <h3>Number of People</h3>
            <div className="person">
              <div className="error">{error}</div>
              <i className="fas fa-user"></i>
              <input type="text" id="person" placeholder="0" onChange={props.handleChangeGetPerson} style={inputStyleError} value={valPerson} />
            </div>  
          </section>

    )
}

export default DataEntries