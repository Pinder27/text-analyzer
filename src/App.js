import TextForm from "./TextForm";
import Navbar from "./Navbar";
import React, { useState } from "react";
import Alert from "./Alert";



// import TextForm from './TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const [txt, setTxt] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      setTxt("Enable light mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode enabled", "success");
    } else {
      setMode("light");
      setTxt("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  };
  return (
    <>
      
        <Navbar title="Text Analyser" mode={mode} toggle={toggle} txt={txt} />
        <Alert alert={alert} />
        <div className="container my-3">
         
          {/* <Routes>
        <Route  path="/About" element={<About />}/>
        <Route path="/" element={<TextForm
                heading="Enter Your Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />}  />
      </Routes> */}
      
      <TextForm
                heading="Enter Your Text To Analyze"
                mode={mode}
                showAlert={showAlert}
              />
        </div>
     
    </>
  );
}

export default App;
