import React, { useState } from 'react';
import ProfileImg from '../assets/profile_3.webp';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'; // Import missing components

const Hero = () => {
  const [isHovered,] = useState(false);

  return (
    <section className='bg-primary text-primary py-6 md:py-32 px-16 md:px-32'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='hero-img md:order-4'>
          <img src={ProfileImg} alt='coding illustration' className='w-[60%] md:w-[90%] mb-6 md:mb-0 m-auto rounded-full' />
        </div>
        <div className='hero-info pb-5 md:pb-0'>
          <h1 className={`text-4xl lg:text-4xl font-medium ${isHovered ? 'animate-bounce' : ''}`}>
            Hi, my name is
          </h1>
          <h1 className={`text-5xl font-medium ${isHovered ? 'animate-pulse' : ''}`}>
            <span className='text-accent pl-7 text-9xl tracking-tighter'>A</span>nkit
          </h1>

          <p className='py-5 pr-10'>
            I'm a frontend developer who loves turning coffee into beautiful websites, especially with the MERN stack.
            <br />
            I'm all about combining good design, great functionality, and a healthy dose of humor to create engaging digital experiences. From concept to execution, I pour my passion into every project to ensure it not only looks fantastic but also works seamlessly.
            <br />
            Join me in crafting captivating websites that leave a lasting impression!
            <br />
            :)
            <br />
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
              <a href='/#projects'>Check out my projects</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
