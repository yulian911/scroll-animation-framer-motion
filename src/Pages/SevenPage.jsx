import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { dashboard } from '../assets';
import Analytics from '../Components/Analytics';
import DashboardPreview from '../Components/DashboardPreview';
import Feature from '../Components/Feature';
import Home from '../Components/Home';

const SevenPage = () => {
  return (
    <section className="">
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
    </section>
  );
};

export default SevenPage;
