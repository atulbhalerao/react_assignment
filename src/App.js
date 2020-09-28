import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import Calculator from './Components/Calculator';

function App() {
  console.dir(this);
  return (
    <div className="App">
      {/* <HelloWorld></HelloWorld>       */}
      {/* <EmployeeList></EmployeeList> */}
      {/* <Calculator></Calculator> */}
    <AddEmployee></AddEmployee>
    </div>
    // <div className="App">  
    //  <Router>    
    //   <div className="container">    
    //     <nav className="btn btn-primary navbar navbar-expand-lg navheader">    
    //       <div className="collapse navbar-collapse" >    
           
    //         <ul className="navbar-nav mr-auto">    
    //           <li className="nav-item">    
    //             <NavLink  to={'/AddEmployee'} activeClassName="btn-danger" className="btn btn-primary nav-link">Add Employee</NavLink >    
    //           </li>    
    //           <li className="nav-item">    
    //             <NavLink  to={'/EmployeeList'} activeClassName="btn-danger" className="btn btn-primary nav-link">Employee List</NavLink >    
    //           </li>    
    //         </ul>    
    //       </div>    
    //     </nav> <br />    
    //     <Switch>    
    //       <Route exact path='/AddEmployee'  component={AddEmployee} />
    //       <Route exact path='/AddEmployee/:id' component={AddEmployee} />
    //       {/* <Route path='/edit/:id' component={Editemployee} />     */}
    //       <Route path='/EmployeeList' component={EmployeeList} />    
    //     </Switch>    
    //   </div>    
    // </Router>    
    // </div> 
  );
}

export default App;
