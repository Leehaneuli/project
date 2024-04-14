import logo from './logo.svg';
import './Welcome.jsx'
import './App.css';
import React from "react";
import ReactDOM from "react-dom";



function App(props) {
  return (

    <h1>안녕ㅎㅎ!!, {props.name} </h1>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  ); 
}
ReactDOM.render(
  <App name="인재" />,

  document.getElementById('root')
);
export default App;
