import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { analytics } from '../utils/dummy';
import { onephone } from '../assets';
// import "../Styles/analytics.scss";

const Analytics = () => {
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
    <div className="h-[fit-content] bg-[#f3f3f3] pt-[35%] pr-[5rem] pb-[10%] pl-[5rem]">
      <motion.div ref={ref} animate={control} variants={list} className="flex items-center">
        <motion.div variants={item1} className="flex flex-col gap-[2rem] flex-1">
          <div className="text-black flex flex-col gap-[2rem]">
            <h1 className="text-[4rem] text-[#0c1727]">Okay, let's see D'task in numbers</h1>
            <p className="text-[1rem] text-[#818890]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque voluptas temporibus
              consectetur, accusantium, soluta eligendi fuga fugiat doloremque sequi corrupti. Nam eveniet odio sapiente
              eum? Quod accusamus distinctio incidunt.
            </p>
          </div>
          <div className="flex items-center gap-[2rem] text-black">
            {analytics.map((analytic, index) => (
              <div
                className="flex items-center flex-col gap-[2rem] cursor-pointer text-[#0c1727] font-bold"
                key={index}
              >
                <div className="h-[180px] w-[180px] rounded-[20px] bg-[#818890] text-[2rem] flex items-center justify-center hover:bg-white hover:text-transparent  hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ad6ce5] hover:via-[#f395ae] hover:to-[#fab466] shadow-lg">
                  {analytic.desc}
                </div>
                <p>{analytic.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={item2} className="">
          <img src={onephone} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
