import React from 'react';


const Blog = () => {
  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-8 md:px-32' id='blog'>
      {}
      <div className='container mx-auto grid pt-16 md:grid-cols-2 items-center md:justify-between' id='cert_dipl'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[220px] border-accent pb-2'>
            Certificates <br />& Diplomas
          </h2>
          <p className='pb-5' >adding soon.....</p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='projects container mx-auto grid md:grid-cols-3 gap-10 text-center	'>
        <div className=''>
          <a href='d' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='https://drive.google.com/file/d/1zdVVGFyYBoRfNK3VNQ25OKbd89iqSyQj/view?usp=sharing' target='_blank' rel='noreferrer'>
            {/* <img src='' alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='https://drive.google.com/file/d/1zdVVGFyYBoRfNK3VNQ25OKbd89iqSyQj/view?usp=sharing' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='https://drive.google.com/file/d/1zdVVGFyYBoRfNK3VNQ25OKbd89iqSyQj/view?usp=sharing' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
        <div className=''>
          <a href='w' target='_blank' rel='noreferrer'>
            {/* <img  alt='img' className='object-contain h-80 cursor-pointer' /> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
