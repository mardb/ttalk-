import React from 'react';
import Layout from './core/Layout'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Layout/>
    <div className="body">
    <div class="tinkle">
      Com<span>in</span>g 
    
      <span class="delay"> So</span>on..<span>.</span><br />
    </div>
    <div class="welcome">
      <span class="delay" id="welcome">Thank You For Your Patience...</span>
    </div>
      </div>
    </div>
  );
}

export default App;
