import React from "react";
import {BsLinkedin, BsBehance, BsInstagram} from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0" href="#about">
          <p className="ml-3 text-xl">
            Jason Humphrey
          </p>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white-700	flex flex-wrap items-center text-white justify-center">
          <a href="#projects" className="mr-5 hover:text-blue-500">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-500">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-blue-500">
            Testimonials
          </a>
        </nav>
        <a href="https://www.linkedin.com/in/jasonhumphreytn/" rel="noreferrer" target="_blank">
        <BsLinkedin className="text-white text-3xl m-2"/>
        </a>
        <a href="https://www.behance.net/jasonhumphrey1" rel="noreferrer" target="_blank">
        <BsBehance className="text-white text-3xl m-2"/>
        </a>
        <a href="https://www.linkedin.com/in/jasonhumphreytn/" rel="noreferrer" target="_blank">
        <BsInstagram className="text-white text-3xl m-2"/>
        </a>
      </div>
    </header>
  );
}
