import React from 'react';
import { moon, mountains01, mountains02, road } from '../assets';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import './eleven.css';

const Eleven = () => {
  return (
    <div className="elevenContainer">
      {/* <div className="containerEleven"> */}
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} className="containerEleven">
        <MouseParallaxChild factorX={0.9} factorY={3} className="layer">
          <img src={moon} alt="img" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.2} factorY={0.2} className="layer ">
          <img src={mountains02} alt="img" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.2} factorY={0.2} className="layer ">
          <img src={mountains01} alt="img" />
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.2} factorY={-0.2} className="layer ">
          <img src={road} alt="img" className="w-full " />
        </MouseParallaxChild>
      </MouseParallaxContainer>
      {/* </div> */}
      <div className="loginEleven">
        <h2>Admin Panel</h2>
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
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Eleven;
