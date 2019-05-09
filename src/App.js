import React from 'react';
import logo from './logo.svg';
import './App.css';

// call it the dumb one because that's how you are going to use it,
// but import the smart one because that's what you need
import BlogList from './containers/BlogListContainer';

function App() {
  return (
    <div className="App">
      <BlogList />
    </div>
  );
}

export default App;
