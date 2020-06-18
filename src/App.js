import React, { useState } from 'react';
import './App.css';
import StudentDetails from './studentdetails';


function App() {

   let [count, setCount] = useState(1);

  var SName = prompt("What is your name?");
  var FName = prompt("What is your father name?");
  var Course = prompt("Which course you are taking?");
  var Age = prompt("What is your age?");


  return (
    <div className="App">

      <StudentDetails name={SName} Fname={FName} course={Course} age={Age} />

      {/* <h1>Value of counter variable is : {count}</h1>
      <button onClick={
        () => setCount(++count)
      }>
        Increase
          </button>

      <button onClick={
        () => setCount(--count)
      }>
        increase
          </button>


      <button onClick={
        () => setCount(count - count)
      }>
        Reset
          </button>  */}

      

    </div>
  );
}

export default App;
