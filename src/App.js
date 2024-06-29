import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'




function App() {
  return (
    // JSX code 
    // react js fragement
    <>
      <Navbar title="TextUtils" aboutText="TextUtil'about"/>
      <div className="container my-3">
        <TextForm heading="Enter Your Text to analyze"/>
  
      </div>
    </>
  
  );
}

export default App;




