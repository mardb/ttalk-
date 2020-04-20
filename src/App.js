import React from 'react';
import Layout from './core/Layout'
import './App.css'
// import Posts from './post/Posts'

const App = () => {
  return (
    <div className="App">
      <Layout/>
    <div className="body">
    <div className="tinkle">
      Com<span>in</span>g 
    
      <span className="delay"> So</span>on..<span>.</span><br />
    </div>
    <div className="welcome">
      <span className="delay" id="welcome">Thank You For Your Patience...</span>
    </div>
      </div>
    </div>
  );
}

export default App;
