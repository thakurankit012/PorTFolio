import React from 'react';
import certificate from '../assets/Accenture certificate.jpg';

const Blog = ({ selectedLanguage }) => {
  // Define content based on language
  const content = {
    en: {
      title: 'Certificates & Diplomas',
      paragraph: 'Adding soon...',
    },
    es: {
      title: 'Certificados y Diplomas',
      paragraph: 'Próximamente...',
    },
    // Add more languages and translations as needed
  };

  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-8 md:px-32' id='blog'>
      <div className='container mx-auto grid pt-16 md:grid-cols-2 items-center md:justify-between' id='cert_dipl'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[220px] border-accent pb-2'>
            {content[selectedLanguage].title}
          </h2>
          <p className='pb-5'>{content[selectedLanguage].paragraph}</p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-3 gap-10 text-center	'>
        <div className=''>
          <a href='https://ibb.co/3s0k69g' target='_blank' rel='noreferrer'>
            <img  alt='img' src={certificate} className='object-contain h-80 cursor-pointer' />
          </a>
        </div>
        <div className=''>
          <a href='./#about' target='_blank' rel='noreferrer'>
            {/* <img src='' alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='./#about' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='./#about' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className='#about'>
          <a href='./#about' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
