import React, { useState, useReducer, useEffect } from 'react'

function Calculator(){
    /*****************Apply Css style******************/
    var numStyle = { cursor: "pointer" }
    /*****************Apply Css style******************/
    
    let initialVal  = '0';
    const [num, setOutput] = useState(initialVal);

    const reducer = (currentVal, action)=>{
        switch(action)
        {
            case 'clear':
                setOutput(initialVal);
                break;
            default:
                setOutput(initialVal);
                break;
        }
    } 
    const [val, actionMethod] = useReducer(reducer, num);   

    /*****************Click Event******************/
    const NumClick = (inputNum)=>{
        let _num = num;
        var operator = ['+', '-', '÷', 'x'];
        
        if((num == '0' && inputNum == '0') || (num == '0' && operator.indexOf(inputNum) >= 0))
        { return; }
        else if(operator.indexOf(inputNum) >= 0)
        {
            if(_num.trim().indexOf('+') == _num.trim().length - 1 
                || _num.trim().indexOf('-') == _num.trim().length - 1
                || _num.trim().indexOf('x') == _num.trim().length - 1
                || _num.trim().indexOf('÷') == _num.trim().length - 1)
                return;
             _num += ' ' + inputNum + ' '; console.log('con : operator');
        }
        else if(inputNum == '=')
        { 
            
            if(_num.trim().split(' ').length >= 3)
            {
                //console.dir(_num.trim().split(' '))
                _num = eval(_num.replace('x', '*').replace('÷', '/').replace('=', ''))
            }
        }
        else 
        { 
            if(num == '0')
                _num=inputNum
            else
                _num += inputNum;
        }

        setOutput(_num)
    };
    /*****************Click Event******************/

    // useEffect(() => {
    //     window.addEventListener('keydown', (event) => {
    //         let _inputs = ['0','1', '2', '3','4','5','6','7', '8', '9'];
    //         let _oprators = ['+','-', '*', '/'];
    //         if(_inputs.indexOf(event.key) >= 0)
    //         {
    //             NumClick(event.key);
    //         }
    //     });
    //   }, []);

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    <h2>Calculator</h2>
                    </div>
                    <div className="col-md-4">
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    <table className="table table-bordered font-weight-bold" style={{ border : 2}}>
                        <tbody>
                            <tr>
                                <td name="outputResult" id="outputResult" colSpan="4" className="text-right" style={
                                    { backgroundColor : '#333232', color:"white" }
                                }>{ num }</td>
                            </tr>
                            <tr>
                                <td colSpan="3" style={numStyle} onClick={() => actionMethod('clear')} >clear</td>                            
                                <td onClick={ ()=> NumClick('÷') }  style={
                                    { backgroundColor : '#e83333', color:"white",cursor: "pointer" }
                                }>÷</td>
                            </tr>
                            <tr>
                                <td style={numStyle} onClick={ ()=> NumClick('7') }>7</td>
                                <td style={numStyle} onClick={ ()=> NumClick('8') }>8</td>
                                <td style={numStyle} onClick={ ()=> NumClick('9') }>9</td>
                                <td onClick={ ()=> NumClick('x') }  style={
                                    { backgroundColor : '#e83333', color:"white",cursor: "pointer" }
                                }>x</td>
                            </tr>
                            <tr>
                                <td style={numStyle} onClick={ ()=> NumClick('4') }>4</td>
                                <td style={numStyle} onClick={ ()=> NumClick('5') }>5</td>
                                <td style={numStyle} onClick={ ()=> NumClick('6') }>6</td>
                                <td onClick={ ()=> NumClick('-') } style={
                                    { backgroundColor : '#e83333', color:"white",cursor: "pointer" }
                                }>-</td>
                            </tr>
                            <tr>
                                <td style={numStyle} onClick={ ()=> NumClick('1') }>1</td>
                                <td style={numStyle} onClick={ ()=> NumClick('2') }>2</td>
                                <td style={numStyle} onClick={ ()=> NumClick('3') }>3</td>
                                <td onClick={ ()=> NumClick('+') } style={
                                    { backgroundColor : '#e83333', color:"white",cursor: "pointer" }
                                }>+</td>
                            </tr>
                            <tr>
                                <td colSpan="3" style={numStyle} onClick={ ()=> NumClick('0') }>0</td>
                                <td onClick={ ()=> NumClick('=') }  style={
                                    { backgroundColor : '#e83333', color:"white",cursor: "pointer" }
                                }>=</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            
        </>
    )
}

export default Calculator;