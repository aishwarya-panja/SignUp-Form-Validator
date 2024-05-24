import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Success from "./components/Success";
import "./App.css" ;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Sign Up Form</h1>
        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
