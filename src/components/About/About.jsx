import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {
  SiAngular,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiNgrx,
  SiJavascript,
  SiExpress,
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaCode } from 'react-icons/fa';

const skills = [
  { label: 'Angular (v2–19)', icon: SiAngular, color: 'text-red-500' },
  { label: 'React.js', icon: FaReact, color: 'text-blue-400' },
  { label: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { label: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { label: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { label: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
  { label: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
  { label: 'NgRx', icon: SiNgrx, color: 'text-purple-600' },
  { label: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { label: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Azhar Khan
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Software Developer',
                'MEAN Stack Developer',
                'MERN Stack Developer',
                'Full Stack Developer',
                'Coder',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer. Skilled in both front-end and back-end development,
            I specialize in Angular (v2–19), React.js, Node.js, and Express.js. I build
            scalable, secure applications using modern technologies like JavaScript, TypeScript,
            RxJS, NgRx, HTML5, CSS3, and Bootstrap to deliver seamless user experiences and
            efficient solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1NodC6rbFcKQWEuUlDZJrQMn1aIFORPvI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side (Stylized Developer Card + Skills) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-[22rem] h-auto md:w-[30rem] rounded-3xl bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400 shadow-xl p-6"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="bg-black/25 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <FaCode className="text-white text-4xl" />
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    Full Stack Developer
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Angular • React • Node • Express
                  </p>
                </div>
              </div>

              {/* Skills grid */}
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-4">
                {skills.map(({ label, icon: Icon, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/10 p-3 hover:bg-white/15 transition"
                  >
                    <Icon className={`${color} text-2xl md:text-3xl`} />
                    <span className="text-white/90 text-xs text-center">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
