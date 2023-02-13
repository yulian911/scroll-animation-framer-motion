import React, { useState } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { one } from '../assets';
import './eightPage.css';

const data = [
  { bg: '#c71610', text: 'facebook', icon: <AiFillFacebook size={30} color="#fff" /> },
  { bg: '#171515', text: 'github', icon: <AiFillGithub size={30} color="#fff" /> },
  { bg: '#0a66c2', text: 'instagram', icon: <AiFillInstagram size={30} color="#fff" /> },
];

const EighthPage = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div className="containerBox">
      <div className={`cardBox ${active ? 'active' : ''}`}>
        <div className="userBox">
          <div className="boxImg">
            <img className="imageBox" src={one} alt="pictures" />
          </div>
          <div className="content">
            <h2>
              Some Famous
              <br />
              <span>Product Designer</span>
            </h2>
          </div>
          <span className={`toggle ${active ? 'active' : null}`} onClick={() => setActive(!active)}></span>
        </div>
        <ul className="contact">
          {data.map((el, index) => (
            <li style={{ transitionDelay: `calc(0.25s * ${index})` }}>
              <a href="#">
                <div className="iconBox" style={{ background: el.bg }}>
                  {el.icon}
                </div>
                <p>{el.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EighthPage;
