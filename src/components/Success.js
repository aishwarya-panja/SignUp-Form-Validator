import React from "react";

const Success = ({formData}) => {

  if (!formData) {
    return (
      <div>
        <h3>No form data found</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.userName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNo}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN Number: {formData.panNo}</p>
      <p>Aadhar Number: {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
