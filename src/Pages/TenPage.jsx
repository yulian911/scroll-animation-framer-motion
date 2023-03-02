import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { GrContactInfo, GrGallery } from 'react-icons/gr';
import { SiSkillshare } from 'react-icons/si';
import './tenPage.css';

const data = [
  { name: 'Home', image: <AiOutlineHome />, route: '/name' },
  { name: 'Skills', image: <SiSkillshare />, route: '/skills' },
  { name: 'Gallery', image: <GrGallery />, route: '/gallery' },
  { name: 'Contact', image: <GrContactInfo />, route: '/contact' },
];

const TenPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add('modal-open'); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove('modal-open');
    }
  }, [isOpened]);

  const preventAutoClose = () => e.stopPropagation();

  return (
    <div>
      <section className="h-[calc(100vh-45px)]">
        <div className="containerTen">
          <div className="inner">
            <span>
              <AiOutlineInfoCircle />
            </span>
            <button onClick={() => setIsOpened(true)} className="modalButton">
              Open Modal
            </button>
          </div>
        </div>
        <dialog ref={ref} onCancel={() => setIsOpened(false)} onClick={() => setIsOpened(false)}>
          <div onClick={preventAutoClose}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut dolore officia, rerum nemo quam,
              ullam veritatis obcaecati fugiat reprehenderit dolor, quisquam id provident molestiae impedit delectus.
              Distinctio, recusandae ducimus!
            </p>
            <button onClick={() => setIsOpened(false)}>Close Modal</button>
          </div>
        </dialog>
        <div className="containerNext">
          <div className="inner">
            <h1>Hey</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto porro minima laboriosam excepturi
              voluptate ad consequuntur consequatur recusandae nulla soluta quas voluptas sunt enim optio iste, aperiam,
              omnis amet facilis?
            </p>
          </div>
        </div>
      </section>
      <section className="h-[calc(100vh-45px)]">
        <div className="cardOne">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">4 days ago</span>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus, debitis, provident veniam
            </p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">
                4 <sup>m</sup>
              </div>
              <div className="type">read</div>
            </div>
            <div className="stat border ">
              <div className="value">32</div>
              <div className="type">comments</div>
            </div>
            <div className="stat  ">
              <div className="value">5123</div>
              <div className="type">views</div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[calc(100vh-45px)]">
        <div className="cardNext rgb">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">4 days ago</span>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus, debitis, provident veniam
              architecto delectus unde voluptatibus necessitatibus esse est.
            </p>
          </div>
        </div>
      </section>
      <section className="h-[calc(100vh-45px)]">
        <div className="scan">
          <div className="fingerprint"></div>
          <h3>Scanning...</h3>
        </div>
      </section>
    </div>
  );
};

export default TenPage;
