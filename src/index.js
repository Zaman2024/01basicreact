import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Myp from './Myp';

// const myOwn = (
//   <div>
//     <h1>This is a paragraph</h1>
//     <p>You are not required to use JSX, but JSX makes it easier to write React applications.</p>
//   </div>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // myOwn

  <>

    <App />
    {/* <Myp /> */}
  </>
);

// App();

// MyRact();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

