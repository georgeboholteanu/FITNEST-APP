import './App.css'
// import './index.css';
import { useState } from 'react'
import Header from './components/Header'
import Login from './components/Login';

function App() {  

  return (
    <>   
      <div className="root">
        {/* <Header /> */}
        <Login/>
      </div>
    </>
  )
}

export default App
