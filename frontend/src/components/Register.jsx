import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <span className="title">Register</span>
        <label htmlFor="username" className="label">Username</label>
        <input type="text" id="username" name="username" required className="input" />
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" name="email" required className="input" />
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" name="password" required className="input" />
        <button type="submit" className="submit">Register</button>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    max-width: 320px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 0px 4px rgba(52, 52, 53, 0.185);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #1a202c;
  }

  .label {
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
  }

  .input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    font-size: 1rem;
    color: #4a5568;
    outline: none;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
  }

  .input:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px #cbd5e0;
  }

  .input:valid {
    border: 1px solid green;
  }

  .input:invalid {
    border: 1px solid rgba(14, 14, 14, 0.205);
  }

  .submit {
    background-color: #1a202c;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }`;

export default Form;
