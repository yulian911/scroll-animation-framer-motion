import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { dashboard } from '../assets';
import Analytics from '../Components/Analytics';
import DashboardPreview from '../Components/DashboardPreview';
import Distribution from '../Components/Distribution';
import Feature from '../Components/Feature';
import Home from '../Components/Home';

const SevenPage = () => {
  return (
    <section className="">
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <div className="w-full h-[600px] bg-slate-400 flex justify-center items-center">
        <div className="w-[400px] h-[400px] relative border-[1px] border-[#352a22] rounded-[8px] bg-[burlywood] overflow-hidden flex items-center justify-center flex-col">
          <div className="min-w-[200%] min-h-[225%] rounded-[30%] absolute bg-[#ffefdb] z-1 animate-fluids"></div>
          <h1>Content</h1>
        </div>
      </div>
      <form className="w-full flex items-center justify-center h-[300px] bg-slate-400 text-black">
        <fieldset className="border-[1px] w-[400px] p-5">
          <legend className="p-4">Favorites</legend>
          <div>Color</div>
          <div>
            <input list="color-list" />
            <datalist id="color-list">
              <option value="Red" />
              <option value="Green" />
              <option value="Blue" />
              <option value="Yellow" />
            </datalist>
            <input type="color" />
            <p>
              H<sub>2</sub>O
            </p>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default SevenPage;
