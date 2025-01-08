import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import Headshot from '../assets/Me.jpeg';

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Full Stack Engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building digital solutions with modern web technologies
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/MDelarosa1993"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/melchordelarosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://docs.google.com/document/d/1YEhi8Hn9bHW9ZNegwc9gn0ttbVG8-VLJqZock8YP1bM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors flex items-center"
                aria-label="View My Resume"
              >
                <FaFileAlt size={30} />
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={Headshot}
              alt="Professional headshot"
              className="w-80 h-80 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
