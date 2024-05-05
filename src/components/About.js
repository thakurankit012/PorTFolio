import React from 'react';
import tech_stack from '../assets/tech_stack_2.png';

const About = ({ selectedLanguage }) => {
  // Define content based on language
  const content = {
    en: {
      title: 'About me',
      intro: "Hello there! I'm Ankit, and I'm deeply passionate about coding, especially in the realm of web development, where I specialize in the MERN stack.",
      paragraph1: "I find joy in unraveling coding challenges and transforming them into beautifully functional solutions. Whether it's creating new projects from scratch or refining existing ones, I dive deep into the intricacies of code to deliver excellence.",
      paragraph2: "My expertise lies in MongoDB, Express.js, React.js, and Node.js, which empower me to bring ideas to life with finesse and efficiency. I'm always eager to explore new technologies and stay updated with the latest trends to ensure I provide the best solutions possible.",
      paragraph3: "On top of my coding pursuits, I'm also pursuing a Bachelor's in Business Administration (BBA), adding a strategic edge to my technical skills. It's a blend that allows me to approach projects with a unique perspective, combining business acumen with technological innovation. I'm thrilled at the opportunity to bring my skills and enthusiasm to your projects, and I'm committed to delivering exceptional results every step of the way."
    },
    es: {
      title: 'Sobre mí',
      intro: "¡Hola! Soy Ankit, y me apasiona profundamente la codificación, especialmente en el ámbito del desarrollo web, donde me especializo en el stack MERN.",
      paragraph1: "Disfruto desentrañando desafíos de codificación y transformándolos en soluciones funcionalmente hermosas. Ya sea creando nuevos proyectos desde cero o refinando los existentes, profundizo en las complejidades del código para ofrecer excelencia.",
      paragraph2: "Mi experiencia radica en MongoDB, Express.js, React.js y Node.js, lo que me permite dar vida a ideas con elegancia y eficiencia. Siempre estoy ansioso por explorar nuevas tecnologías y mantenerme actualizado con las últimas tendencias para garantizar que brinde las mejores soluciones posibles.",
      paragraph3: "Además de mis actividades de codificación, también estoy cursando una Licenciatura en Administración de Empresas (BBA), agregando un enfoque estratégico a mis habilidades técnicas. Es una combinación que me permite abordar proyectos con una perspectiva única, combinando conocimientos empresariales con innovación tecnológica. Estoy emocionado con la oportunidad de llevar mis habilidades y entusiasmo a tus proyectos, y estoy comprometido a brindar resultados excepcionales en cada paso del camino."
    },
    // Add more languages and translations as needed
  };

  return (
    <section className='bg-secondary text-secondary py-16 md:py-32 px-16 md:px-32' id='about'>
      <div className='container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between'>
        <div className='about-info'>
          <h2 className='text-4xl  font-bold mb-5 border-b-[5px] w-[180px] border-accent pb-2'>{content[selectedLanguage].title}</h2>
          <p className='pb-5'>{content[selectedLanguage].intro}</p>
          <p className='pb-5'>{content[selectedLanguage].paragraph1}</p>
          <p className='pb-5'>{content[selectedLanguage].paragraph2}</p>
          <p className='pb-5'>{content[selectedLanguage].paragraph3}</p>
        </div>
        <div className='about-img w-[70%] items-center m-auto'>
          <img src={tech_stack} alt='tech_stack' className='lgw-[80%] md:ml-auto' />
        </div>
      </div>
    </section>
  );
};

export default About;
