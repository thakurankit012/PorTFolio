import React, { useState, useEffect } from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';


const ContactSection = () => {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const targetOffsetTop = document.getElementById('contact').offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > targetOffsetTop - windowHeight + 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='bg-primary py-16 md:py-32 px-16 md:px-32' id='contact'>
      <div className='text-center md:w-[60%] mx-auto text-primary'>
        <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-accent pb-2'>Contact me</h2>
        <p>
          Thanks for checking out my portfolio! I'm currently open to new opportunities as a developer, so if you have any questions or would like to discuss a project, please don't hesitate to get in
          touch! You can reach me via email, or connect with me on LinkedIn to learn more about my experience and skills. I'm always looking forward to new exciting projects and would love to hear
          from you. Let's work together to build something amazing!
        </p>
        <p className='py-2'>
          <span className='font-bold'>Email:</span> thakurankit13197@gmail.com
        </p>
        <p className='py-3'>//py-2
          <span className='font-bold'>Phone:</span> (+91) 7011783191
        </p>
        <div className='py-5 '>
          <a href='https://github.com/thakurankit012/ankitgpt' target='_blank' rel='noreferrer' className='pr-4 inline-block'>
            <AiOutlineGithub size={40} />
          </a>
          <a href='https://www.linkedin.com/in/ankit-thakur-6259b5226/' target='_blank' rel='noreferrer' className='pr-4 inline-block'>
            <AiOutlineLinkedin size={40} />
          </a>
          <a href='mailto:thakurankit13197@gmail.com' target='_blank' rel='noreferrer' className='pr-4 inline-block'>
            <AiOutlineMail size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
