import React from 'react';
import { moon, mountains01, mountains02, road } from '../assets';
import './eleven.css';

const Eleven = () => {
  return (
    <div className="elevenContainer">
      <div className="containerEleven">
        <div id="scene">
          <div className="layer">
            <img src={moon} alt="img" />
            <img src={mountains01} alt="img" />
            <img src={mountains02} alt="img" />
            <img src={road} alt="img" />
          </div>
        </div>
      </div>
      <div className="loginEleven">
        <h2>Sign In</h2>
        <div className="inputBoxEleven">
          <input type={'text'} placeholder="USERNAME" />
        </div>
        <div className="inputBoxEleven">
          <input type={'password'} placeholder="PASSWORD" />
        </div>
        <div className="inputBoxEleven">
          <input type={'submit'} value="Login" id="btn" />
        </div>
        <div className="group">
          <a href="#">Forget Password</a>
          <a href="#">sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Eleven;
