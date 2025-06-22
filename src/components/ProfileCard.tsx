import React from 'react';
import { FaDownload, FaExternalLinkAlt, FaGithub, FaInstagram, FaJs, FaLinkedin, FaNodeJs, FaReact, FaTelegram } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, ariaLabel }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={ariaLabel}
    className="bg-white/10 backdrop-blur-sm text-gray-800 p-2.5 sm:p-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
  >
    {children}
  </a>
);

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-lg text-gray-800 rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative -mt-16 sm:-mt-20 lg:-mt-28 mb-4 sm:mb-6">
          <img
            src="/photo-profile.png"
            alt="Maksim Zaytsev profile photo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2 sm:mb-3">
          Maksim Zaytsev
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-center text-gray-600 leading-relaxed px-2 sm:px-4 mb-6 sm:mb-8">
          Hi 👋, call me Max. I'm a{' '}
          <a 
            href="https://www.geeksforgeeks.org/blogs/what-is-full-stack-development/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-1 rounded"
          >
            fullstack developer
          </a>{' '}
          based in the Czech Republic, specializing in enterprise systems with a strong focus on UX/UI design.
        </p>

        {/* Tech Stack Icons */}
        <div className="flex space-x-3 sm:space-x-4 mb-6 sm:mb-8">
          <SiTypescript className="text-3xl sm:text-4xl transition-transform duration-300 hover:scale-110" />
          <FaReact className="text-3xl sm:text-4xl transition-transform duration-300 hover:scale-110" />
          <FaJs className="text-3xl sm:text-4xl transition-transform duration-300 hover:scale-110" />
          <FaNodeJs className="text-3xl sm:text-4xl transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="relative">
            <a 
              href="#" 
              className="relative group block bg-gray-400 text-white text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl w-full font-semibold cursor-not-allowed opacity-75 transition-all duration-300 focus:outline-none"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-center text-sm sm:text-base">
                <FaDownload className="mr-2 text-sm sm:text-base" />
                Download CV
              </div>
            </a>
            <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
              Coming Soon
            </div>
          </div>

          <a 
            href="https://www.zaytsev.cz/" 
            className="group flex items-center justify-center bg-gray-800 text-white text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl w-full font-semibold hover:bg-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
          >
            <span className="text-sm sm:text-base">Visit my website</span>
            <FaExternalLinkAlt className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          <SocialLink href="https://www.instagram.com/zaytsev.cz/" ariaLabel="Instagram">
            <FaInstagram className="text-xl sm:text-2xl" />
          </SocialLink>
          <SocialLink href="https://t.me/zaytsev" ariaLabel="Telegram">
            <FaTelegram className="text-xl sm:text-2xl" />
          </SocialLink>
          <SocialLink href="mailto:maksim@zaytsev.cz" ariaLabel="Email">
            <IoMail className="text-xl sm:text-2xl" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/zaytsevcz/" ariaLabel="LinkedIn">
            <FaLinkedin className="text-xl sm:text-2xl" />
          </SocialLink>
          <SocialLink href="https://github.com/zaymax" ariaLabel="GitHub">
            <FaGithub className="text-xl sm:text-2xl" />
          </SocialLink>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;