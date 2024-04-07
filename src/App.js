import { useState } from 'react';
// import './App.css';
// import MyRact from "./Myp";

function App() {

    const [color, setColor] = useState("green");

  return (
      <div className='w-full flex flex-wrap justify- p-1 border-2 border-black-500 mt-20 mb-0 ml-10 mr-10 rounded-lg '>
      <button className='bg-red-500 pl-5 pr-5 pt-1 pb-1' onClick={()=> setColor("red")}>Red</button>
      </div>
  )
}

export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
