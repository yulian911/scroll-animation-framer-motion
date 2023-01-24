import React, { useEffect } from 'react';
// import '../Styles/distribution.scss';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsApple } from 'react-icons/bs';
import { twophones } from '../assets';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Distribution = () => {
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
    <div className="pt-[40%] pr-[5rem] pb-[10%] pl-[5rem]">
      <motion.div ref={ref} animate={control} variants={list} className="flex  justify-center items-center">
        <motion.div variants={item1} className="flex-1 flex flex-col gap-[2rem] ">
          <div className="flex  flex-col gap-[2rem]">
            <h1 className="text-[4rem] text-white">D'task also works on your phone.</h1>
            <p className="text-[1.3rem] text-[#535555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis tempora beatae voluptates
              omnis saepe corrupti, error numquam accusamus eligendi expedita provident. Recusandae iusto porro ullam
              dolores facere, tenetur odit.
            </p>
          </div>
          <div className="flex  items-center gap-[2rem] ">
            <button className=" flex items-center gap-[1rem] text-white bg-[#0c1727] py-0 px-[2rem] border-none h-[40px] cursor-pointer outline-none rounded-[20px] bg-none font-bold">
              <BsApple />
              Download App
            </button>
            <button className=" flex items-center gap-[1rem] text-white bg-[#0c1727] py-0 px-[2rem] border-none h-[40px] cursor-pointer outline-none rounded-[20px] bg-none font-bold">
              <IoLogoGooglePlaystore />
              Download App
            </button>
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;
