import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
// import react from '../../assets/images/react.jpeg'
// import amplifyArq from '../../assets/images/amplifyArq.png'
// import languages from '../../assets/images/languages.png'
// import git from '../../assets/images/git.png'
import {MdLogin} from 'react-icons/md'

export default function Skills() {
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[10%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Technical skills</p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row'>
              <div className='w-3/5'>
                <p className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Frontend Development:</p>
                <p className='text-[20px] font-light mt-2'>•  React.js: Building dynamic user interfaces with stateful components.</p>
                <p className='text-[20px] font-light mt-2'>•  Fully responsive applications.</p>
                <p className='text-[20px] font-light mt-2'>•  Focused on SPAs (Single-Page-Applications).</p>
                <p className='text-[20px] font-light mt-2'>•  UI/UX Implementations: Leveraging various technologies to create intuitive and delightful user experiences.</p>
              </div>
              <div className='w-2/5 flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/react.jpeg" alt="react" width={200} className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Backend Development:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  AWS Amplify: Managing backend services, API integration, lambda functions, authentication, and encryption.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Serverless Architectures: Understanding and implementing serverless solutions for efficient development cycles.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Offering many functionalities with only one stack.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Saving time and money not testing backend functionalities.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/amplifyArq.png" alt="amplifyArq" className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Styling and Design:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  TailwindCSS: Applying utility-first framework for responsive design and efficient styling.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Figma: Creating components to improve visual engagement on the site. </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Responsive Web Design: Ensuring websites are accessible and aesthetically pleasing across various devices.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center justify-center my-6'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                  <p className='text-cyan-300 text-[20px] font-bold'>Without tailwindcss:</p>
                  <div className='flex flex-col items-start bg-white text-black p-4 font-serif'>
                    <p>Username:</p>
                    <input type="text" className='border-[1px] border-slate-400'/>
                    <p>Password:</p>
                    <input type="password" className='border-[1px] border-slate-400'/>
                    <button className='bg-slate-300 w-auto'>Sign In</button>
                  </div>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                  <p className='text-cyan-300 text-[20px] font-bold'>With tailwindcss:</p>
                  <div className='flex flex-col items-start bg-slate-600 rounded-[25px] border-2 border-cyan-300 shadow-md shadow-green-300 text-black p-4'>
                    <p className='text-[20px] text-cyan-300 font-bold'>Username:</p>
                    <input type="text" className='border-[2px] border-cyan-300 rounded-lg py-[1px] px-2 outline-none mt-1'/>
                    <p className='text-[20px] text-cyan-300 font-bold mt-3'>Password:</p>
                    <input type="password" className='border-[2px] border-cyan-300 rounded-lg py-[1px] px-2 outline-none mt-1'/>
                    <div className='w-full flex items-center justify-center mt-6'>
                      <button 
                        className='flex flex-row items-center justify-center bg-gradient-to-r from-cyan-300 to-green-300 py-1 px-3 text-white rounded-lg hover:bg-gradient-to-r hover:from-cyan-200 hover:to-green-200 hover:scale-110'
                      >
                        <p className='font-bold text-[18px]'>Sign In</p>
                        <MdLogin className='w-[18px] h-[18px]'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Programming Languages:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Python: Writing clear and efficient code for a variety of applications.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  JavaScript: Implementing interactive features and client-side scripts.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  PHP: Developing server-side logic and database interactions (prior experience).</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  C++: For embedded systems development with a wide variety of microcontrollers.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6 px-[10%]'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/languages.png" alt="languages" className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Version Control:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>•  Git: Proficient in using Git for version control and collaboration.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6 px-[10%]'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/git.png" alt="git" className='rounded-[20px]'/>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Soft Skills</p>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Problem-Solving:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>Demonstrated ability to approach complex problems with logical and creative solutions.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Continuous Learning:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>
                I am a quick and autonomous learner, capable of efficiently acquiring knowledge
                on a wide array of topics with minimal time investment. Committed to staying 
                updated with the latest technologies and industry trends.
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Adaptability:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>
                Proven track record of adapting to new technologies and methodologies in a rapidly evolving field.
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Communication:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>
                Articulate in explaining technical concepts to non-technical stakeholders and working collaboratively with teams.
              </p>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Additional Skills</p>
            <div className='w-full flex flex-col mb-12'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Project Management:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>Experience in leading projects from conception to deployment, ensuring timely delivery.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Client Relations:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] font-light mt-2'>
                Proven ability to understand client needs and deliver solutions that meet their business objectives.
              </p>
            </div>
          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[5%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Technical skills</p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-col'>
              <div className='w-full'>
                <p className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Frontend Development:</p>
                <p className='text-[18px] mt-1 font-light'>•  React.js: Building dynamic user interfaces with stateful components.</p>
                <p className='text-[18px] mt-1 font-light'>•  Fully responsive applications.</p>
                <p className='text-[18px] mt-1 font-light'>•  Focused on SPAs (Single-Page-Applications).</p>
                <p className='text-[18px] mt-1 font-light'>•  UI/UX Implementations: Leveraging various technologies to create intuitive and delightful user experiences.</p>
              </div>
              <div className='w-full flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/react.jpeg" alt="react" width={200} className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Backend Development:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  AWS Amplify: Managing backend services, API integration, lambda functions, authentication, and encryption.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Serverless Architectures: Understanding and implementing serverless solutions for efficient development cycles.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Offering many functionalities with only one stack.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Saving time and money not testing backend functionalities.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/amplifyArq.png" alt="amplifyArq" className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Styling and Design:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  TailwindCSS: Applying utility-first framework for responsive design and efficient styling.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Figma: Creating components to improve visual engagement on the site. </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Responsive Web Design: Ensuring websites are accessible and aesthetically pleasing across various devices.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-col items-center justify-center my-6'>
                <div className='w-full flex flex-col items-center justify-center'>
                  <p className='text-cyan-300 text-[20px] font-bold'>Without tailwindcss:</p>
                  <div className='flex flex-col items-start bg-white text-black p-4 font-serif'>
                    <p>Username:</p>
                    <input type="text" className='border-[1px] border-slate-400'/>
                    <p>Password:</p>
                    <input type="password" className='border-[1px] border-slate-400'/>
                    <button className='bg-slate-300 w-auto'>Sign In</button>
                  </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center mt-8'>
                  <p className='text-cyan-300 text-[20px] font-bold'>With tailwindcss:</p>
                  <div className='flex flex-col items-start bg-slate-600 rounded-[25px] border-2 border-cyan-300 shadow-md shadow-green-300 text-black p-4'>
                    <p className='text-[20px] text-cyan-300 font-bold'>Username:</p>
                    <input type="text" className='border-[2px] border-cyan-300 rounded-lg py-[1px] px-2 outline-none mt-1'/>
                    <p className='text-[20px] text-cyan-300 font-bold mt-3'>Password:</p>
                    <input type="password" className='border-[2px] border-cyan-300 rounded-lg py-[1px] px-2 outline-none mt-1'/>
                    <div className='w-full flex items-center justify-center mt-6'>
                      <button 
                        className='flex flex-row items-center justify-center bg-gradient-to-r from-cyan-300 to-green-300 py-1 px-3 text-white rounded-lg hover:bg-gradient-to-r hover:from-cyan-200 hover:to-green-200 hover:scale-110'
                      >
                        <p className='font-bold text-[18px]'>Sign In</p>
                        <MdLogin className='w-[18px] h-[18px]'/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Programming Languages:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Python: Writing clear and efficient code for a variety of applications.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  JavaScript: Implementing interactive features and client-side scripts.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  PHP: Developing server-side logic and database interactions (prior experience).</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  C++: For embedded systems development with a wide variety of microcontrollers.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/languages.png" alt="languages" className='rounded-[20px]'/>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Version Control:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>•  Git: Proficient in using Git for version control and collaboration.</p>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center my-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/git.png" alt="git" className='rounded-[20px]'/>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Soft Skills</p>
            <div className='w-full flex flex-col'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Problem-Solving:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>Demonstrated ability to approach complex problems with logical and creative solutions.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Continuous Learning:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>
                I am a quick and autonomous learner, capable of efficiently acquiring knowledge
                on a wide array of topics with minimal time investment. Committed to staying 
                updated with the latest technologies and industry trends.
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Adaptability:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>
                Proven track record of adapting to new technologies and methodologies in a rapidly evolving field.
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Communication:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>
                Articulate in explaining technical concepts to non-technical stakeholders and working collaboratively with teams.
              </p>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Additional Skills</p>
            <div className='w-full flex flex-col mb-12'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Project Management:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>Experience in leading projects from conception to deployment, ensuring timely delivery.</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 mb-4 text-cyan-300'>Client Relations:</p>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] mt-1 font-light'>
                Proven ability to understand client needs and deliver solutions that meet their business objectives.
              </p>
            </div>
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
