import React from 'react';
import ReactDOM from 'react-dom';

const name ="Ruchi Sinha";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1>{ `My name is ${name}` } </h1>
  <p>{`Today's date is ${date}`}</p>
  <p>{`Current time is ${time}`}</p>
  </>
  ,document.getElementById("root")
);



// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Bollywood Songs</h1>
//     <p>My All Time Favroutes</p>
//     <ol>
//       <li>Chaiya chaiya</li>
//       <li>Ae Mere Hamsafar </li>
//       <li>Jab Koi Baat Bigad Jaye</li>
//       <li>Zindgi Ki Yahi Reet Hai </li>
//     </ol>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
