import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import two from '../assets/two.png'
const Hero = () => {
  return (
    <div id='home' className=" w-full h-screen overflow-hidden mt-20 flex flex-col md:flex-row">
      {/* Background image */}
      {/* <div className="absolute inset-0 bg-[url('')] bg-cover bg-center bg-no-repeat"></div> */}

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Foreground content */}
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full gap-8 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold w-[90%] md:w-[90%]">
          <span className="bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
            I'm Hakima Aqlim,
          </span>{' '}
          Mern Stack developer based in RAWALPINDI
        </h1>
        <p className="md:w-[70%] text-white">
          I am a Mern Stack developer from Rawalpindi, Pakistan with 1 year of experience in companies like PNY, Decimal Solution, and CodesVista.
        </p>
        <div className="flex gap-3 mt-4 mb-4 flex-wrap justify-center">
          <button className="text-white hover:scale-105 transition px-6 py-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]">
            <AnchorLink className="anchor-link" href="#contact">
              Connect With Me
            </AnchorLink>
          </button>
          <a
  href="/HakimaAqlimcv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:scale-105 transition px-6 py-2 rounded-full border border-white"
>
  My Resume
</a>
        </div>
      </div>
      <div className=' relative w-full h-full '>
        <img  className="absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" height={100} src={two} alt="" />
      </div>
    </div>
  );
};

export default Hero;
