import React from 'react';
import tech_stack from '../assets/tech_stack_2.png';

const About = () => {
  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-16 md:px-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl  font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>About me</h2>
          <p className='pb-5'>Hello there! I'm Ankit, and I'm deeply passionate about coding, especially in the realm of web development, where I specialize in the MERN stack..</p>
          <p className='pb-5'>
          I find joy in unraveling coding challenges and transforming them into beautifully functional solutions. Whether it's creating new projects from scratch or refining existing ones, I dive deep into the intricacies of code to deliver excellence.
          </p>
          <p className='pb-5'>My expertise lies in MongoDB, Express.js, React.js, and Node.js, which empower me to bring ideas to life with finesse and efficiency. I'm always eager to explore new technologies and stay updated with the latest trends to ensure I provide the best solutions possible.</p>
          <p className='pb-5'>
          On top of my coding pursuits, I'm also pursuing a Bachelor's in Business Administration (BBA), adding a strategic edge to my technical skills. It's a blend that allows me to approach projects with a unique perspective, combining business acumen with technological innovation.

I'm thrilled at the opportunity to bring my skills and enthusiasm to your projects, and I'm committed to delivering exceptional results every step of the way.

.
          </p>
        </div>
        <div className='about-img w-[70%] items-center m-auto'>
          <img src={tech_stack} alt='tech_stack' className='lgw-[80%] md:ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;
