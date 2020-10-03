import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import Calculator from './Components/Calculator';
import DigitalClock from './Components/DigitalClock';
//import WeatherService from './Components/Weather/Service/WeatherService'
import WeatherDashboard from './Components/Weather/WeatherDashboard'

function App() {
  
  return (
    // <div className="App">
    //   {/* <HelloWorld></HelloWorld>       */}
    //   {/* <EmployeeList></EmployeeList> */}
    //   {/* <Calculator></Calculator> */}
    //   {/* <AddEmployee></AddEmployee> */}
    //   {/* <Calculator></Calculator> */}
    //   {/* <DigitalClock></DigitalClock> */}
    //   <WeatherDashboard></WeatherDashboard>
    // </div>
    <div className="App">  
     <Router>    
      <div className="container">    
        <nav className="btn btn-primary navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
           
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <NavLink  to={'/AddEmployee'} activeClassName="btn-danger" className="btn btn-primary nav-link">Add Employee</NavLink >    
              </li>    
              <li className="nav-item">    
                <NavLink  to={'/EmployeeList'} activeClassName="btn-danger" className="btn btn-primary nav-link">Employee List</NavLink >    
              </li>
              <li className="nav-item">    
                <NavLink  to={'/Calculator'} activeClassName="btn-danger" className="btn btn-primary nav-link">Calculator</NavLink >    
              </li>
              <li className="nav-item">    
                <NavLink  to={'/DigitalClock'} activeClassName="btn-danger" className="btn btn-primary nav-link">Digital Clock</NavLink >    
              </li>
              <li className="nav-item">    
                <NavLink  to={'/WeatherDashboard'} activeClassName="btn-danger" className="btn btn-primary nav-link">Weather Report</NavLink >    
              </li>
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/AddEmployee'  component={AddEmployee} />
          <Route exact path='/AddEmployee/:id' component={AddEmployee} />
          <Route path='/EmployeeList' component={EmployeeList} />    
          <Route path='/Calculator' component={Calculator} />
          <Route path='/DigitalClock' component={DigitalClock} />
          <Route path='/WeatherDashboard' component={WeatherDashboard} />
        </Switch>    
      </div>    
    </Router>    
    </div> 
  );
}

export default App;
