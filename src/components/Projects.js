import React from 'react';
import project_1 from '../assets/project_1.gif';
import project_2 from '../assets/project_2.gif';
import project_3 from '../assets/project3.gif';
import project_4 from '../assets/project4.png';

const projects = [
  {
    title: 'book eccomerce ',
    subtitle: 'Javascript | css | html',
    description:
      '📚🛒 Book Commerce Website Design | 💻🎨 HTML, CSS, JavaScript | 📚 Created the visual layout and design of a book commerce website using HTML, CSS, and JavaScript. Integrate Firebase for backend support.',
    image: project_1,
    live: 'https://bookecommercewebsite.tiiny.site/',
    code: 'https://github.com/thakurankit012/book-website-ecommerce',
  },
  {
    title: 'Chat bot',
    subtitle: 'Html | Javascript | css',
    description:
      '🗨️🤖 Chatbot with Open API Integration | 💬🔌 Core JavaScript | 🌐 Designed a chatbot application utilizing open APIs and developed with core JavaScript.',
    image: project_2,
     live: 'https://rose-charyl-57.tiiny.site/',
    code: 'https://github.com/thakurankit012/ankitgpt',
  },
  {
    title: 'Portfolio',
    subtitle: 'React.js | html | css | javascript',
    description: '🎨📁 Portfolio Website | ⌨️🖱️ React.js | 🖼️ Created a stunning portfolio website using React.js to showcases my projects and skills.',
    image: project_3,
    // live: '',
     code: 'https://github.com/thakurankit012/ankitgpt',
  },
 
  {
    title: 'Portfolio Page',
    subtitle: 'React.js | Tailwind CSS',
    description: 'This very portfolio page 😅. Also a project, right ? My first take on Tailwind CSS.',
    image: project_4,
    // live: '',
    // code: 'https://github.com/thakurankit012/ankitgpt',
  },
];

const Projects = () => {
  return (
    <section className='bg-primary text-primary py-16 md:py-32 px-16 md:px-32' id='projects'>
      <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-between'>
        <div className='about-info mb-5'>
          <h2 className='text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-accent pb-2'>Projects</h2>
          <p className='pb-5'>Check out some of my recent projects and see whether it's a match 👨‍💻. I am constantly learning and new projects are always on top of my mind, let's work on something!</p>
        </div>
        <div className='about-img'></div>
      </div>
      <div className='container md:px-5 py-5 mx-auto text-center'>
        <div className='projects container mx-auto grid md:grid-cols-2 gap-5'>
          {projects.map((project, i) => {
            return (
              <div className='relative shadow-lg' key={i}>
                <img src={project.image} alt={project.title}/>
                <div className='flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-secondary pb-6  opacity-0 duration-500 justify-center items-center flex-col hover:opacity-100 '>
                  <h1 className='tracking-widest text-m title-font font-medium text-black mb-1 leading-tight cursor-default border-b-[1px] border-white w-[50%] pb-2'>{project.title}</h1>
                  <h2 className='tracking-widest text-sm title-font font-medium text-black mb-1 mt-1 cursor-default'>{project.subtitle}</h2>

                  <p className='description py-5 text-center px-2 mb-3 text-white text-sm w-[90%] cursor-default'>{project.description}</p>

                  <div className='mx-auto'>
                    {project.live ? (
                      <a href={project.live} target='_blank' rel='noreferrer' className='px-5 pb-3 pt-2 bg-primary hover:bg-accent mr-5 font-bold'>
                        Live
                      </a>
                    ) : null}
                    <a href={project.code} target='_blank' rel='noreferrer' className='px-5 pb-3 pt-2 bg-primary hover:bg-accent font-bold'>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
