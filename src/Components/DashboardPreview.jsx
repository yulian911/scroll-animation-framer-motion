import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { dashboard } from '../assets';

const DashboardPreview = () => {
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
      className="w-[70%] absolute bottom-[-70%] left-0 right-0 m-auto  "
    >
      <img src={dashboard} alt="" draggable={false} className="w-[100%] rounded-[40px] shadow-sm " />
    </motion.div>
  );
};

export default DashboardPreview;
