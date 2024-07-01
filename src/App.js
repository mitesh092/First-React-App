import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React ,{ useState } from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const [mode,setmode] = useState("light"); // wheter mode is enable or not

  
  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor  = "black";
      document.body.style.color = "white"; 
      let toggel_text = document.getElementById("toggel_text");
      toggel_text.innerText = "disable dark mode";
      showalert(" Dark Mode Has Been Enable", "success");
      
    }else{
      setmode("light");
      document.body.style.backgroundColor  = "white";
      document.body.style.color = "black";
      let toggel_text = document.getElementById("toggel_text");
      toggel_text.innerText = "enable dark mode"; 
      showalert(" Light Mode Has Been Enable", "success");
    }
  }
  // alert state var
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({ 
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const router = createBrowserRouter([
    {
      path :  "/",
      element :<>
        <Navbar title="TextUtils" aboutText="TextUtil'about" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <TextForm  showalert={showalert} heading="Enter Your Text to analyze" />
      </> 
    },
    // <Navbar title="TextUtils" aboutText="TextUtil'about" mode={mode} toggleMode={toggleMode} />
    // <Alert alert = {alert}/>
    {
      path : "/about",
      element :<>
        <Navbar title="TextUtils" aboutText="TextUtil'about" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <About/>
      </> 
    }
  ])
  return (
    // JSX code 
    // react js fragement
    <>
      <RouterProvider router={router}/>
      
    </>
  
  );
}

export default App;




