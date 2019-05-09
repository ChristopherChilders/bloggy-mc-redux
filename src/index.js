import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// {

//     posts: {
  
//       1001: {
  
//         title: 'Learning Redux',
  
//         content: 'Learning Redux was the best thing that ever happened to me. The end.'
  
//       },
  
//       1002: {
  
//         title: 'Learning React',
  
//         content: 'Learning Redux was the other best thing that ever happened to me. The end.'
  
//       }
  
//     }
  
//   }


// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );