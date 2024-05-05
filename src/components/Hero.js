import React, { useState } from 'react';
import ProfileImg from '../assets/profile_3.webp';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';

const Hero = ({ selectedLanguage, onLanguageChange }) => {
  const [isHovered,] = useState(false);

  // Define content based on language
  const content = {
    en: {
      title: 'Hi, my name is',
      name: 'Ankit',
      intro: "I'm a frontend developer who loves turning coffee into beautiful websites, especially with the MERN stack. I'm all about combining good design, great functionality, and a healthy dose of humor to create engaging digital experiences. From concept to execution, I pour my passion into every project to ensure it not only looks fantastic but also works seamlessly. Join me in crafting captivating websites that leave a lasting impression! :)",
      buttonLabel: 'Check out my projects'
    },
    es: {
      title: 'Hola, mi nombre es',
      name: 'Ankit',
      intro: "Soy un desarrollador frontend que ama convertir café en hermosos sitios web, especialmente con el stack MERN. Me encanta combinar un buen diseño, gran funcionalidad y una dosis saludable de humor para crear experiencias digitales atractivas. Desde el concepto hasta la ejecución, vierto mi pasión en cada proyecto para asegurarme de que no solo se vea fantástico, sino que también funcione perfectamente. ¡Únete a mí para crear sitios web cautivadores que dejen una impresión duradera! :)",
      buttonLabel: 'Ver mis proyectos'
    }
  };

  return (
    <section className='bg-primary text-primary py-6 md:py-32 px-16 md:px-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-img md:order-4'>
          <img src={ProfileImg} alt='coding illustration' className='w-[60%] md:w-[90%] mb-6 md:mb-0 m-auto rounded-full' />
        </div>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className={`text-4xl lg:text-4xl font-medium ${isHovered ? 'animate-bounce' : ''}`}>
            {content[selectedLanguage].title}
          </h1>
          <h1 className={`text-5xl font-medium ${isHovered ? 'animate-pulse' : ''}`}>
            <span className='text-accent pl-7 text-9xl tracking-tighter'>{content[selectedLanguage].name}</span>
          </h1>

          <p className='py-5 pr-10'>
            {content[selectedLanguage].intro}
          </p>

          <div className='flex py-5 justify-center md:justify-start'>
            <a
              href='https://github.com/thakurankit012/ankitgpt'
              target='_blank'
              rel='noreferrer'
              className='pr-4 inline-block text-[#902333] hover:text-[#121924]'
            >
              <AiOutlineGithub size={40} />
            </a>
            <a
              href='https://www.linkedin.com/in/ankit-thakur-6259b5226/'
              target='_blank'
              rel='noreferrer'
              className='pr-4 inline-block text-[#902333] hover:text-[#121924]'
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              href='mailto:thakurankit13197@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='pr-4 inline-block text-[#902333] hover:text-[#121924]'
            >
              <AiOutlineMail size={40} />
            </a>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button className='btn bg-accent border-2 border-accent font-semibold text-secondary px-6 py-3 hover:bg-transparent hover:border-[#121924] hover:text-[#121924]'>
              <a href='/#projects'>{content[selectedLanguage].buttonLabel}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
