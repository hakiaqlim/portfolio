import React, { useState, useEffect } from 'react';
import underline from '../../src/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
const [mbMenu, setMbMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect section in view
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setMenu(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex text-white px-6 py-5 justify-between items-center transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-sm bg-black/80' : 'bg-[#171513]'
      }`}
    >
      <div>
        <h1 className="text-xl font-bold bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
         <Link to='/'>HAKIMA AQLIM</Link> 
        </h1>
      </div>

      {/* Desktop nav */}
      <ul className="md:flex items-center gap-6  font-semibold hidden cursor-pointer">
        {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}{' '}
              {menu === item ? <img src={underline} alt="" /> : null}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <CiMenuFries size={30}  onClick={()=> setMbMenu(true)}/>
        </div>
        <button className="text-white hidden md:block hover:scale-105 transition px-6 py-2 rounded-full bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)]">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </button>
      </div>
      {mbMenu && (
      <div className='absolute top-0 text-center right-0 bg-[#D97A28] w-[40%] h-screen overflow-hidden flex flex-col py-6'>
        <div className='flex justify-end px-1 mb-10'>
          <RxCross2 onClick={()=> setMbMenu(false)}/>
        </div>
 <ul className=" items-center flex flex-col  font-semibold gap-5 cursor-pointer">
        {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href={`#${item}`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}{' '}
              {menu === item ? <img src={underline} className='m-auto' alt="" /> : null}
            </AnchorLink>
          </li>
        ))}
      </ul>
      </div>
      )}
    </div>
  );
};

export default Navbar;
