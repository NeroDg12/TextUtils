
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";




function App() {
  const [mode,setMode] = useState("white");
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // const removeBodyClass = ()=> {
  //   document.body.classList.remove("bg-white")
  //   document.body.classList.remove("bg-black")
  //   document.body.classList.remove("bg-red")
  //   document.body.classList.remove("bg-blue")about:blank#blocked
  //   document.body.classList.remove("bg-green")
  //   document.body.classList.remove("bg-yellow")
  // }
  const toggleMode = (cls) => {
    // removeBodyClass();       
    // document.body.classList.add("bg-"+cls)
    if(mode === "white"){
      setMode("black")
      document.body.style.background = "#212529"
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtility-DarkMode"
    }
    else{
      setMode("white")
      document.body.style.background = "white"
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtility-LightMode"
    } 
  }

  return (
    <>

      <Navbar title = "TexUtils" mode = {mode} toggleMode = {toggleMode}  />

      <Alert alert = {alert}/>
      <div className="container w-3/4 pl-60">
      
        <Routes> 
          <Route path="/" element={<TextForm  showAlert = {showAlert} heading = "TextUtils- Word Counter,Character Counter" mode = {mode}/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </div>

      
    
    </>
    
   
  )
}
export default App;
