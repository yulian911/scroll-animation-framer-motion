import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getGame, getMovie } from '../api/gameApi';
import { AiFillHome, AiFillFire, AiOutlineUser } from 'react-icons/ai';
import { TbDeviceGamepad } from 'react-icons/tb';
import './ninePage.css';
const NinePage = () => {
  const { data, status, error } = useQuery({
    queryKey: ['animae'],
    queryFn: getMovie,
  });

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') {
    <h1>{JSON.stringify(error)}</h1>;
  }
  return (
    <div>
      <section className="bg-white">
        <div className="imgScroll">
          <div>
            {data?.data.map((el, index) => (
              <img src={el.image} alt="image" />
            ))}
          </div>
        </div>
        {/* old navigation  */}
        <ul className="navigations">
          <li className="active">
            <a href="#">
              <AiFillHome />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFire />
            </a>
          </li>
          <li>
            <a href="#">
              <TbDeviceGamepad />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineUser />
            </a>
          </li>
        </ul>
      </section>
      {/* <section></section> */}
    </div>
  );
};

export default NinePage;
