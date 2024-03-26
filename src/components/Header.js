import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <header className='flex justify-between px-10 py-2 bg-primary text-primary'>
      <a href='/' className='logo text-2xl'>
        <h1 className='invisible md:visible'>
        <span className='text-accent text-3xl'>
  <img src={Logo}  alt='Logo' width='80' height='80' />
</span>

        </h1>
      </a>

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#projects'>Projects</a>
          </li>
          {/* <li>
            <a href='/#blog'>Blog</a>
          </li> */}
          <li>
            <a href='/#cert_dipl'>Certificates & Diplomas</a>
          </li>
          <li>
            <a href='/#contact'>Contact</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1yNzjVupEYpuE-v-UJGI2hBA0Jyc7_FjU/view?usp=sharing' target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
        <ul className='flex flex-col py-10 text-5xl'>
          <li>
            <a href='/#about' onClick={handleToggle}>
              About
            </a>
          </li>
          <li>
            <a href='/#projects' onClick={handleToggle}>
              Projects
            </a>
          </li>
          {/* <li>
            <a href='/#blog' onClick={handleToggle}>
              Blog
            </a>
          </li> */}
          <li>
            <a href='/#cert_dipl' onClick={handleToggle}>
              Certificates & Diplomas
            </a>
          </li>
          <li>
            <a href='/#contact' onClick={handleToggle}>
              Contact
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1yNzjVupEYpuE-v-UJGI2hBA0Jyc7_FjU/view?usp=sharing' target='_blank' rel='noreferrer' onClick={handleToggle}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* Toggle Button*/}
      <button onClick={handleToggle} className='block md:hidden'>
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
