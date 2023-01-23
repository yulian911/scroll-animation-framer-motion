import React, { useEffect } from 'react';
import { controls } from '../utils/dummy';
// import "../Styles/control.scss";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Control = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    vissible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start('vissible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="w-[70%] absolute bottom-[-40%] left-0 right-0 m-auto bg-white p-[5rem] rounded-[20px] shadow-lg"
    >
      <div className="w-[100%] flex flex-col gap-[2rem] ">
        <div className="flex flex-col gap-[2rem] text-center">
          <h1 className="text-[4rem] text-[#0c1727] ">Control in one place</h1>
          <p className="text-[#818890] text-[1.3rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non esse eaque obcaecati repudiandae alias eveniet
            ea iure corrupti modi.
          </p>
          <button className="py-0 px-[2rem] border-none h-[40px] cursor-pointer outline-none rounded-[20px] bg-none font-bold">
            Start 14 days trial
          </button>
        </div>
        <div className="control__content">
          {controls.map((control, index) => (
            <div className="control" key={index}>
              <div className="control__icon">
                <control.icon />
              </div>

              <div className="control__text__content">
                <p>{control.name}</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quos.</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Control;
