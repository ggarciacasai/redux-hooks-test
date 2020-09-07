import React from 'react';

import './App.css';
import Posts from './component/posts';
import User2 from './component/secondUsers';

const styles= {
  float: 'left', 
  width: '40%'
}

function App() {
  return (
    <div className="App">
         <h1>Redux Tutorial</h1>
         
         <div style={styles}><Posts/></div>
         <div style={styles}><User2/></div>        
   
    </div>
  );
}

export default App;
