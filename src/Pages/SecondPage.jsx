import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Adidas, NB, Nba, Nice } from '../assets';

const articles = [
  { id: 1, title: 'Great time', excerpt: 'Await' },
  { id: 2, title: 'Great time', excerpt: 'Await' },
  { id: 3, title: 'Great time', excerpt: 'Await' },
  { id: 4, title: 'Great time', excerpt: 'Await' },
  { id: 5, title: 'Great time', excerpt: 'Await' },
  { id: 6, title: 'Great time', excerpt: 'Await' },
];

const SecondPage = () => {
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [progress, setProgress] = React.useState(undefined);

  const strenght = (password) => {
    let i = 0;
    if (password.length > 6) {
      i++;
    }
    if (password.length > 10) {
      i++;
    }
    if (/[A-Z]/.test(password)) {
      i++;
    }
    if (/[0-9]/.test(password)) {
      i++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
      i++;
    }
    if (i === 0) {
      return setProgress(undefined);
    } else if (i <= 2) {
      return setProgress('weak');
    } else if (i >= 2 && i <= 4) {
      return setProgress('medium');
    } else {
      return setProgress('strong');
    }
  };

  useEffect(() => {
    strenght(password);
  }, [password, setPassword]);

  // console.log(progress)
  return (
    <>
      <motion.div
        className="bg-red-800 flex justify-center items-center min-h-[100vh]"
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: '100%',
        }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0.1 },
        }}
      >
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              className="w-40 h-40 bg-violet-800 rounded-lg flex flex-col justify-center items-center"
              initial={{
                opacity: 0,
                targetX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <section>
        <div className="container relative w-[400px] p-[30px] bg-[#333] flex justify-center items-center flex-col border-[1px] border-[#111] gap-[10px]  ">
          <h2 className="text-[#666] font-[500]">Password Strenght Check</h2>
          <div className="inputBoxCheck relative w-full">
            <input
              className="w-full bg-[#222] p-[10px] outline-none border-none text-[1.1em]"
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute top-0 right-0 w-[70px] h-full bg-[#333] border-[6px] border-[#222] cursor-pointer flex justify-center items-center transition-all"
              onClick={() => setShow(!show)}
            >
              {show ? 'Hide' : 'Show'}
            </div>
          </div>
          {progress ? (
            <div className="font-bold transition-all">
              Your Password is <span className="capitalize">{progress}</span>
            </div>
          ) : null}
          <div className={`strengthMeter ${progress} `}></div>
        </div>
      </section>
      <section>
        <div className="cardFlip">
          <div className="faces front">
            <h2>Front</h2>
          </div>
          <div className="faces back">
            <h2>Front</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[100%] h-[100px] flex bg-slate-300 justify-center">
          <img src={Nice} alt="photos" className="w-[15%] aspect-[3/2] object-contain  mix-blend-color-burn" />
          <img src={Nba} alt="photos" className="w-[15%] aspect-[3/2] object-contain  mix-blend-color-burn" />
          <img src={Adidas} alt="photos" className="w-[15%] aspect-[3/2] object-contain  mix-blend-color-burn" />
          <img src={NB} alt="photos" className="w-[15%] aspect-[3/2] object-contain  mix-blend-color-burn" />
        </div>
      </section>
    </>
  );
};

export default SecondPage;
