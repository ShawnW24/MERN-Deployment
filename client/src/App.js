import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from "@reach/router";
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';



function App() {
  return (
    <div className="App">
      <h1 className="bg-info  text-dark rounded col-3 mx-auto">.::PET SHELTER::.</h1>
      <div className="d-flex justify-content-around bg-dark col-6 mx-auto p-2 text-warning">
        <Link to ="/new" >Add A Pet To The Shelter</Link>
        <Link to ="/">Home</Link>
      

      </div>
      <Router>
        <Main path="/" />
        <New path="/new"/>
        <Show path="/pet/:id"/>
        <Edit path="/edit/:id"/>

      </Router>







    </div>
  );
}

export default App;
