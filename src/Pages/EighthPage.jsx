import React, { useState, createElement, Children, useRef } from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { one } from '../assets';
import './eightPage.css';

const data = [
  { bg: '#c71610', text: 'facebook', icon: <AiFillFacebook size={30} color="#fff" /> },
  { bg: '#171515', text: 'github', icon: <AiFillGithub size={30} color="#fff" /> },
  { bg: '#0a66c2', text: 'instagram', icon: <AiFillInstagram size={30} color="#fff" /> },
];

const spans = [];
const EighthPage = () => {
  const [active, setActive] = useState(false);
  const [hh, setHH] = useState(new Date().getHours());
  const [ss, setSS] = useState(new Date().getSeconds());
  const [mm, setMM] = useState(new Date().getMinutes());
  const [child, setChild] = useState([]);
  const refBut = useRef(null);
  let h = new Date().getHours();

  let color;
  const onPress = (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    color = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    const style = { '--crl': color, '--xb': `${x}px`, '--yb': `${y}px` };
    let riples = <span style={style}></span>;

    setChild((prev) => [...prev, riples]);
    // setTimeout(() => {
    //   setChild([]);
    // }, 20000);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSS(new Date().getSeconds());
      setHH(new Date().getHours());
      setMM(new Date().getMinutes());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (hh > 12) {
    return setHH(hh - 12);
  }

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
      <div className="overflow-hidden w-[300px] h-[300px] p-3">
        <div id="time">
          <div className="circle stroke-[#ff2972] ">
            <div className="dots before:bg-[#ff2972]" style={{ transform: `rotateZ(${ss * 6}deg)` }}></div>
            <svg>
              <circle cx="120" cy="120" r="120" style={{ strokeDashoffset: 760 - (760 * ss) / 60 }} />
            </svg>
          </div>

          <div className="circle  stroke-[#fee800]">
            <div className="dots min_dot before:bg-[#fee800]" style={{ transform: `rotateZ(${mm * 6}deg)` }}></div>
            <svg>
              <circle cx="100" cy="100" r="100" style={{ strokeDashoffset: 630 - (630 * mm) / 60 }} />
            </svg>
          </div>

          <div className="circle stroke-[#04fc43]">
            <div className="dots sec_dot before:bg-[#04fc43] " style={{ transform: `rotateZ(${hh * 30}deg)` }}></div>
            <svg>
              <circle cx="80" cy="80" r="80" style={{ strokeDashoffset: 510 - (510 * hh) / 12 }} />
            </svg>
          </div>
          <div className="timeBx">
            <div className=" hours text-[#ff2972]">{h < 10 ? `0` + h : h}</div>
            <div className="minutes text-[#fee800]">{mm < 10 ? `0` + mm : mm}</div>
            <div className="seconds text-[#04fc43]">{ss < 10 ? `0` + ss : ss}</div>
            <div className="ap">{h > 12 ? 'PM' : 'AM'}</div>
          </div>
        </div>
      </div>
      <div className="bg-[red] w-[400px] h-[300px] flex justify-center items-center gap-[20px]">
        <a onClick={onPress} ref={refBut} href="#" className="btN">
          {Array.isArray(child) ? child.map((el) => <>{el}</>) : []}
          Awesome
        </a>
        <a href="#" className="btN">
          {Array.isArray(child) ? child.map((el) => <>{el}</>) : []}
          Button
        </a>
      </div>
    </div>
  );
};

export default EighthPage;
