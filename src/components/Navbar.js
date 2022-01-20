import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import {BsLinkedin} from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Jason Humphrey
          </a>
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
        <a href="https://github.com/SJasonHumphrey" rel="noreferrer" target="_blank">
        <FaGithubSquare className="text-white text-4xl m-2"/>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-white mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
