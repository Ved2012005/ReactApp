// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import{
  HashRouter as Router,
  Routes,
  Route,
}from 'react-router-dom';

function App() {
  
  const [mode,setMode]=useState('light')//whether Dark mode enable or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

 const togglemode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("dark mode has been enable","success");
    //document.title="Textutiles-Dark Mode"
    setInterval(() => {
      document.title="Textutiles is amazing mode"
    }, 1000);

    setInterval(() => {
      document.title="install Textutiles now"
    }, 1500);
  }

  else if(mode==='danger'){
    setMode('dark')
    document.body.style.backgroundColor='black';
  }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor='white';
    //   document.title="Textutiles-Light Mode"
    //   // showAlert("light mode has been enable","success");
    // }
 }

 const togglemode2=()=>{
  if(mode === 'light'){
    setMode('danger')
    document.body.style.backgroundColor='yellow';
  }
  else if(mode==='dark'){
    setMode('danger')
    document.body.style.backgroundColor='yellow';
  }
 }

 const light=()=>{
  if(mode === 'dark' || mode==='danger'){
    setMode('light')
    document.body.style.backgroundColor='white';
  }
 }

  return (
    <>
 <Router>
    <Navbar title="ved" mode={mode} togglemode={togglemode} togglemode2={togglemode2} light={light}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className="container my-4">
      <Routes>
         <Route exact path='/about' element={<About mode={mode}/>}/>
         <Route exact path='/' element={<Textform showAlert={showAlert} heading="TextUtiles-Word counter,character counter,Lowecase to UpperCase,replaceWord,UpperCase to LowerCase" mode={mode}/>}/>        
      </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
