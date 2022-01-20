

const DataEntries = (props) => {

    let error = props.error
    let tip = props.tip

    let inputStyleError = (error !== "" ) ? { background: 'rgba(183,0,0,0.4)' } : { background: 'transparent' }
    let tipStyleBgActive = { background: 'hsl(172, 67%, 45%)', color: 'hsl(183, 100%, 15%)' } 

    return (

        <section className="leftPage">
            <h3>Bill</h3>
            <div className="amount">
              <span>$</span>
              <input type="text" id="amount" placeholder="0" onChange={props.handleChangeGetBill}/>
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
                <li><input type="text" id="tipsCustom" placeholder="Custom" /></li>
              </ul>
            </div>
            <h3>Number of People</h3>
            <div className="person">
              <div className="error">{error}</div>
              <i className="fas fa-user"></i>
              <input type="text" id="person" placeholder="0" onChange={props.handleChangeGetPerson} style={inputStyleError}/>
            </div>  
          </section>

    )
}

export default DataEntries