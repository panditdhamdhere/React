import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="aboutText"/>
      <div className="container">
      <Textform heading="Enter The Text To Analyze"/>
      </div>
    </>
  );
}

export default App;
