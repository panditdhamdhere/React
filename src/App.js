import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'

import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enables or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been Enabled", "Success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "Success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="aboutText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
       {/* <Textform showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} /> */}
        <About />
      </div>
    </>
  );
}

export default App;
