import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
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
  return (
    <section className="text-black">
      <div className="navigation_nav">
        <ul>
          {data.map((el, index) => (
            <li key={index} className="list_nav">
              <a href="#">
                <span className="icon_nav">{el.image}</span>
                <span className="text_nav">{el.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TenPage;
