import React, {useState} from 'react'
import style from '../Contents/MainCss.module.css'
import 'font-awesome/css/font-awesome.min.css';

function DigitalClock()
{
    let headerCss = {color :'white', fontWeight: 'bold', backgroundColor:'#253469'}
    let showDate = 'none'
    let datetime = new Date();
    let formattedDateTime = {
        date : '',
        time : ''
    }
    
    //const [currentDateTime, steCurrentDateTime] = useState(datetime)
    const [toggleBtn, settoggleBtn] = useState(showDate);
    const [dtFormatted, setFormatDateTime] = useState(formattedDateTime);
    
    const UpdateDateTime = ()=>{
        datetime = new Date();
        formatTime(datetime);
    }

    setInterval(UpdateDateTime, 1000);

    const toggleButtonChange = (e) => {  
        if(e.target.checked)
        settoggleBtn('');
        else
        settoggleBtn('none');
    };

    

    const formatTime = (today)=>{
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        let _time = h + ":" + m + ":" + s;
        
        let dtArr = String(today).split(' ')
        let _date = dtArr[0] + ' ' + dtArr[2] + ' ' + dtArr[1] + ' ' + dtArr[3];
        
        setFormatDateTime({ date : _date, time : _time})        
        
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

    return(<>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header" style={headerCss}>
                        <i className="fa fa-clock-o" aria-hidden="true" style={{ fontSize:'1.5em' }}></i>&nbsp;<span style={{ fontSize:'1.3em' }}>Digital Clock</span>
                    </div>
                    <div className="card-body justify-content-center" style={ { display: "grid" }}>
                        <div>
                            <label className={style.switch} style={{ fontSize:'0.6em' }}>
                                <input id="chkDate" type="checkbox" onChange={ toggleButtonChange }></input>
                                <span className={style.slider}></span>
                            </label>
                            &nbsp;<i className="fa fa-calendar fa-lg" style={{ fontSize:'1.1em' }}></i>
                        </div>
                        <br></br>
                        {/* <div className={ style.box }>
                            <h5 className={ style.clockTime }>{ currentDateTime.toLocaleTimeString().split(' ')[0] }</h5>
                            
                        </div> */}
                        <div className={ style.mainCircle }>
                            <div className={ style.circleTime }>
                                <span >{ dtFormatted.time  } </span>
                                <br></br>
                                <span  className={ style.circleDate } style={ { display: toggleBtn }} >
                                    { dtFormatted.date }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    </>)    
}

export default DigitalClock;