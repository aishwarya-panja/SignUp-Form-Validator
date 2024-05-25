import React, { useState } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Success from "./components/Success";
import "./App.css" ;

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    phoneNo: "",
    countryCode: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Sign Up Form</h1>
        <Routes>
          <Route path="/" element={<FormComponent formData={formData} setFormData={setFormData} />} />
          <Route path="/success" element={<Success formData={formData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
