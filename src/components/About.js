import React from 'react'

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                Hi, I'm <span className='text-blue-500'>Jason Humphrey</span>
                <br className="hidden lg:inline-block" />I love to create amazing
                designs.
              </h1>
              <p className="mb-8 leading-relaxed">
              I’m A Professional <strong>Graphic Designer, Photographer, Web Developer</strong> and <strong>Motion Graphic Designer</strong>. I love to design things that catch the eye and engage people.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded text-lg">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="cartoon avatar"
                src="./jason-computer.png"
              />
            </div>
          </div>
        </section>
      );
}
