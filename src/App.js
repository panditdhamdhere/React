import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enables or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="aboutText" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Enter The Text To Analyze Below" mode={mode}/>
       {/* <About /> */}
      </div>
    </>
  );
}

export default App;
