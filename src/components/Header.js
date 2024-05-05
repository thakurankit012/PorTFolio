import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/logo.png';

const Header = ({ changeLanguage }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className='flex justify-between px-10 py-2 bg-primary text-primary'>
      <a href='/' className='logo text-2xl'>
        <h1 className='invisible md:visible'>
          <span className='text-accent text-3xl'>
            <img src={Logo} alt='Logo' width='80' height='80' />
          </span>
        </h1>
      </a>

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
        <ul className='flex'>
          <li>
            <a href='/#about'>{changeLanguage === 'es' ? 'Acerca de' : 'About'}</a>
          </li>
          <li>
            <a href='/#projects'>{changeLanguage === 'es' ? 'Proyectos' : 'Projects'}</a>
          </li>
          <li>
            <a href='/#cert_dipl'>{changeLanguage === 'es' ? 'Certificados & Diplomas' : 'Certificates & Diplomas'}</a>
          </li>
          <li>
            <a href='/#contact'>{changeLanguage === 'es' ? 'Contacto' : 'Contact'}</a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1dg0M4MqwBCNgvuIU-jTUmvejwWhbs7m3/view?usp=sharing' target='_blank' rel='noreferrer'>
              {changeLanguage === 'es' ? 'Currículum' : 'Resume'}
            </a>
          </li>
          {/* Language Selection */}
          <li>
            <button onClick={() => changeLanguage('en')} className='mr-2'>{changeLanguage === 'es' ? 'Inglés' : 'English'}</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('es')} className='mr-2'>{changeLanguage === 'es' ? 'Español' : 'Spanish'}</button>
          </li>
          {/* Add more buttons for other languages as needed */}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? 'mobile-nav left-[-100%]' : 'mobile-nav left-0'}>
        <ul className='flex flex-col py-10 text-5xl'>
          <li>
            <a href='/#about' onClick={handleToggle}>
              {changeLanguage === 'es' ? 'Acerca de' : 'About'}
            </a>
          </li>
          <li>
            <a href='/#projects' onClick={handleToggle}>
              {changeLanguage === 'es' ? 'Proyectos' : 'Projects'}
            </a>
          </li>
          <li>
            <a href='/#cert_dipl' onClick={handleToggle}>
              {changeLanguage === 'es' ? 'Certificados & Diplomas' : 'Certificates & Diplomas'}
            </a>
          </li>
          <li>
            <a href='/#contact' onClick={handleToggle}>
              {changeLanguage === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1dg0M4MqwBCNgvuIU-jTUmvejwWhbs7m3/view?usp=sharing' target='_blank' rel='noreferrer' onClick={handleToggle}>
              {changeLanguage === 'es' ? 'Currículum' : 'Resume'}
            </a>
          </li>
          {/* Language Selection */}
          <li>
            <button onClick={() => changeLanguage('en')} className='mr-2'>{changeLanguage === 'es' ? 'Inglés' : 'English'}</button>
          </li>
          <li>
            <button onClick={() => changeLanguage('es')} className='mr-2'>{changeLanguage === 'es' ? 'Español' : 'Spanish'}</button>
          </li>
          {/* Add more buttons for other languages as needed */}
        </ul>
      </nav>

      {/* Toggle Button */}
      <div className='md:hidden'>
        <button onClick={handleToggle}>
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
        <div className={`absolute top-14 right-4 z-20 bg-primary rounded-lg shadow-md py-2 px-4 ${toggle ? 'block' : 'hidden'}`}>
          <button onClick={() => changeLanguage('en')} className='block w-full py-2 text-left'>{changeLanguage === 'es' ? 'Inglés' : 'English'}</button>
          <button onClick={() => changeLanguage('es')} className='block w-full py-2 text-left'>{changeLanguage === 'es' ? 'Español' : 'Spanish'}</button>
          {/* Add more buttons for other languages as needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;
