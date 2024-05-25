import React, { useState } from 'react';
import { useNavigate } from "react-router-dom" ;

const FormComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        phoneNo: '',
        countryCode: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.firstName.trim()) formErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) formErrors.lastName = "Last Name is required";
        if (!formData.userName.trim()) formErrors.userName = "Username is required";
        if (!formData.email) formErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Email address is invalid" ;
        if (!formData.password) formErrors.password = 'Password is required';
        else if (formData.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
        if (!formData.phoneNo.trim()) formErrors.phoneNo = 'Phone Number is required';
        if (!formData.countryCode) formErrors.countryCode = 'Country Code is required';
        if (!formData.country) formErrors.country = 'Country is required';
        if (!formData.city) formErrors.city = 'City is required';
        if (!formData.panNo.trim()) formErrors.panNo = 'Pan Number is required';
        if (!formData.aadharNo.trim()) formErrors.aadharNo = 'Aadhar Number is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0 ;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            navigate("/success", { formData });
        }
    };


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input
                type = "text"
                name = "firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
            <label>Last Name</label>
            <input
               type = "text"
               name = "lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
            <label>Username</label>
            <input
               type = "text"
               name = "userName"
                value={formData.userName}
                onChange={handleChange}
            />
            {errors.userName && <p>{errors.userName}</p>}
        </div>
        <div>
            <label>Email</label>
            <input
               type = "email"
               name = "email"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
            <label>Password</label>
            <input
               type = {showPassword ? 'text' : 'password'}
               name = "password"
                value={formData.password}
                onChange={handleChange}
            />
            <button type='button' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
            <label>Phone Number</label>
            <input
               type = "text"
               name = "phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
            />
            {errors.phoneNo && <p>{errors.phoneNo}</p>}
        </div>
        <div>
            <label>Country Code</label>
            <input
               type = "text"
               name = "countryCode"
                value={formData.countryCode}
                onChange={handleChange}
            />
            {errors.countryCode && <p>{errors.countryCode}</p>}
        </div>
        <div>
            <label>Country</label>
            <select name='country' value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>
            </select>
            {errors.country && <p>{errors.country}</p>}
        </div>
        <div>
            <label>City</label>
            <select name='city' value={formData.city} onChange={handleChange}>
                <option value="">Select City</option>
                {formData.country === "India" && (
                    <>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Bangalore">Bangalore</option>
                    </>
                )}
                 {formData.country === "USA" && (
                    <>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="San Fransisco">San Fransisco</option>
                    <option value="New York">New York</option>
                    </>
                )}
                 {formData.country === "UK" && (
                    <>
                    <option value="Derby">Derby</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="London">London</option>
                    </>
                )}
                 {formData.country === "France" && (
                    <>
                    <option value="Paris">Paris</option>
                    <option value="Marceille">Marceille</option>
                    </>
                )}
                 {formData.country === "Germany" && (
                    <>
                    <option value="Berlin">Berlin</option>
                    <option value="Frankfurt">Frankfurt</option>
                    <option value="Munich">Munich</option>
                    </>
                )}
                 {formData.country === "Italy" && (
                    <>
                    <option value="Rome">Rome</option>
                    <option value="Milan">Milan</option>
                    <option value="Venice">Venice</option>
                    </>
                )}
            </select>
            {errors.city && <p>{errors.city}</p>}
        </div>
        <div>
            <label>Pan Number</label>
            <input
               type = "text"
               name = "panNo"
                value={formData.panNo}
                onChange={handleChange}
            />
            {errors.panNo && <p>{errors.panNo}</p>}
        </div>
        <div>
            <label>Aadhar Number</label>
            <input
               type = "text"
               name = "aadharNo"
                value={formData.aadharNo}
                onChange={handleChange}
            />
            {errors.aadharNo && <p>{errors.aadharNo}</p>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
            Sign Up
        </button>
    </form>
  );
};

export default FormComponent ;