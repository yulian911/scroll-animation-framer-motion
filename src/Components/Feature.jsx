import React, { useEffect } from 'react';
import { feature } from '../assets';
import { features } from '../utils/dummy';
import { TiTick } from 'react-icons/ti';
// import "../Styles/feature.scss";
// import Control from "./Control";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Control from './Control';

const Feature = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('vissible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };
  return (
    <div className="bg-[#0c1727] pt-[5rem] pr-[5rem] pb-[20%] pl-[5rem] relative">
      <motion.div ref={ref} animate={control} variants={list} className="flex items-center gap-[2rem]">
        <motion.div variants={item1} className="flex-1">
          <img src={feature} alt="" draggable={false} className="w-[80%]" />
        </motion.div>
        <motion.div variants={item2} className="flex-1 gap-[2rem] flex flex-col ">
          <div className="gap-[2rem] flex flex-col">
            <h1 className="text-[4rem] text-white ">
              Feature to help <br /> your team succeed
            </h1>
            <p className="text-[1.3rem] text-[#818890]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi modi alias dolorem non nulla corporis
              dolorum enim optio ducimus nihil, sint fugit, praesentium consectetur illum minima cum, libero nobis
              debitis.
            </p>
          </div>
          <div className="grid grid-cols-[1fr,1fr] gap-[2rem]">
            {features.map((feature, index) => (
              <div className="flex gap-[1rem]" key={index}>
                <TiTick className="h-[20px] min-w-[20px] rounded-[5px] bg-[#3ab7fd]" />
                <div>
                  <p className="text-white  font-bold">{feature}</p>
                  <span className="text-[#818890]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <Control />
    </div>
  );
};

export default Feature;
