/*
Creating a form for user to fill their contacts.
This is for the contact page.
*/

import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

function Form() {
    const [formData, setFormData] = useState({
      userName: "",
      email: "",
      message: "",
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { userName, email, message } = formData;

    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      if (inputType === "email") {
        setFormData({...formData, [inputType]:inputValue});
      }else{
        alert("You didn't complete the form");
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        return;
        
      }
      
      alert(`Hello ${userName}`);

      setFormData({
        userName: "",
        email: "",
        message: "",
      });
      
    };

    return (
      <div className='mx-5 my-5'>
        <h2>Contact me</h2>
        <form className="form">
        <label htmlFor="email" className="form-label">Email address</label>
          <input
            className="form-control form-control-lg"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Enter your email here"
          />
        <label htmlFor="usernamel" className="form-label">Username</label>
          <input
            className="form-control form-control-lg"
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter your username here"
          />
        <label htmlFor="message" className="form-label">Message</label>
          <input
            className="form-control form-control-lg"
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Leave a message here"
          />
          <button type="button" className="btn btn-primary my-3 p-2" style={{width: "200px"}} onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }
  
export default Form;