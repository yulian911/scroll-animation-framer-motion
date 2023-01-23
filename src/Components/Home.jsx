import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const list = {
    hidden: { opacity: 0 },
    vissible: { opacity: 1 },
  };

  const item = {
    vissible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: '-50%',
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
      initial="hidden"
      animate={control}
      variants={list}
      ref={ref}
      className="text-center flex flex-col h-[calc(100vh-44px)] justify-center "
    >
      <motion.h1
        variants={item}
        className="text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#ad6ce5] via-[#f395ae] to-[#fab466]"
      >
        Make Your Business
      </motion.h1>
      <motion.h1
        variants={item}
        className="text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#ad6ce5] via-[#f395ae] to-[#fab466]"
      >
        More Powerfull
      </motion.h1>
    </motion.div>
  );
};

export default Home;
