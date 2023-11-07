import React from 'react'
import WebComponent from './../reusable/WebComponent'
import MobileComponent from './../reusable/MobileComponent'
import FullScreenDiv from './../reusable/FullScreenDiv'
import pepi from '../../assets/images/pepi2.png'
import programando from '../../assets/images/programando.png'
import {HiDocumentCheck} from 'react-icons/hi2'
import {FaDotCircle} from 'react-icons/fa'

export default function LandingPage() {

  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex items-center justify-center bg-slate-900 px-[10%] text-white'>
            <div className='w-full flex flex-row items-center justify-center'>
              <div className='w-3/5 flex flex-col pr-10 items-center justify-center'>
                <div className='w-full flex flex-col'>
                  <p className='text-[30px] font-bold'>Hello,  It's Me</p>
                  <p className='text-[45px] font-black text-cyan-300 mt-1'>Andrés Poepsel Vasquez</p>
                  <div className='flex flex-row items-center mt-4'>
                    <p className='text-[30px] font-lato'>And I'm a</p>
                    <p className='text-[30px] ml-3 text-cyan-300 font-bold'>Fullstack Developer</p>
                  </div>
                  <p className='mt-12 font-roboto text-[20px] font-thin'>
                    Welcome to my digital portfolio! Here, you'll gain insights into both my personal
                    and professional projects, showcasing the breadth and depth of my journey in software 
                    development and technical skills.
                  </p>
                  <div className='mt-16 w-full'>
                    <a 
                      href="https://portfoliostorage120849-dev.s3.amazonaws.com/public/CV+Andres+Poepsel+English.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      download={true}
                      className="flex flex-row w-[260px] items-center justify-center text-slate-900 space-x-3 bg-cyan-300 px-5 py-2 rounded-full hover:shadow-md hover:shadow-cyan-100"
                    >
                      <p className='font-bold text-[25px]'>Download CV</p>
                      <HiDocumentCheck className='w-[25px] h-[25px]'/>
                    </a>
                    
                  </div>
                </div>
              </div>
              <div className='w-2/5 items-center justify-center'>
                <div className='w-full flex items-center justify-center'>
                  <img src={pepi} alt="pepi" />
                </div>
              </div>
            </div>
          </div>
        </FullScreenDiv>
        <div className='w-full flex flex-col items-center justify-center bg-slate-900 text-white px-[10%] text-justify py-32'>
          <div className='w-full flex flex-row items-center justify-center'>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-1/2 flex flex-col pr-16'>
              <p className='font-bold text-cyan-300 text-[35px]'>About Me:</p>
              <p className='text-[25px] font-light mt-8'>
                I'm a dedicated and dynamic Full-Stack Developer with a knack for turning
                complex problems into elegant, user-friendly software solutions. With a rich blend of
                front-end and back-end expertise, I bridge the gap between graphical design and technical
                implementation, ensuring a seamless, intuitive user experience.
              </p>
            </div>
            <img 
              data-aos="fade-up" data-aos-anchor-placement="center-bottom"
              src={programando} 
              width={500}
              alt="programando" 
              className='w-1/2 rounded-[30px]'  
            />
          </div>

          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full font-bold text-cyan-300 text-[35px] mt-32'>
            Top Qualities:
          </p>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-5 mt-10'>
            <FaDotCircle className='fill-cyan-300 ml-8 w-[30px] h-[30px]'/>
            <p className='text-[30px]'>Fervent enthusiasm for technology and its transformative power</p>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-5 mt-10'>
            <FaDotCircle className='fill-cyan-300 ml-8 w-[30px] h-[30px]'/>
            <p className='text-[30px]'>Constantly exploring emerging trends</p>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-5 mt-10'>
            <FaDotCircle className='fill-cyan-300 ml-8 w-[30px] h-[30px]'/>
            <p className='text-[30px]'>Regularly refining and enhancing skills.</p>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-5 mt-10'>
            <FaDotCircle className='fill-cyan-300 ml-8 w-[30px] h-[30px]'/>
            <p className='text-[30px]'>Consistently growing through lessons learned from mistakes.</p>
          </div>

          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[70px] text-cyan-300 mt-[110px]'>
            Let's build the future together!
          </p>
        </div>      
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex items-center justify-center bg-slate-900 px-[5%] text-white'>
            <div className='w-full flex flex-col items-center justify-center'>
              <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full flex flex-col mt-8'>
                  <p className='text-[25px] font-bold'>Hello,  It's Me</p>
                  <div className='w-full flex items-center justify-center'>
                    <img src={pepi} alt="pepi" />
                  </div>
                  <p className='text-[25px] font-black text-cyan-300 mt-2 text-center'>Andrés Poepsel Vasquez</p>
                  <div className='w-full flex flex-col items-center mt-4'>
                    <p className='text-[30px] font-lato'>And I'm a</p>
                    <p className='text-[30px] ml-3 text-cyan-300 font-bold'>Fullstack Developer</p>
                  </div>
                </div>
              </div>
              <div className='w-2/5 items-center justify-center'>
                
              </div>
            </div>
          </div>
        </FullScreenDiv>
        
        <div className='w-full flex flex-col items-center justify-center bg-slate-900 text-white px-[10%] text-justify py-12'>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full'>
            <p className='mt-12 font-roboto text-[20px] font-thin text-justify'>
              Welcome to my digital portfolio! Here, you'll gain insights into both my personal
              and professional projects, showcasing the breadth and depth of my journey in software 
              development and technical skills.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='mt-8'>
          <a 
            href="https://portfoliostorage120849-dev.s3.amazonaws.com/public/CV+Andres+Poepsel+English.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download={true}
            className="flex flex-row w-[260px] items-center justify-center text-slate-900 space-x-3 bg-cyan-300 px-5 py-2 rounded-full hover:shadow-md hover:shadow-cyan-100"
          >
            <p className='font-bold text-[25px]'>Download CV</p>
            <HiDocumentCheck className='w-[25px] h-[25px]'/>
          </a>
          </div>
          <div className='w-full flex flex-col items-center justify-center mt-16'>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-col'>
              <p className='font-bold text-cyan-300 text-[30px]'>About Me:</p>
              <p className='text-[18px] font-light mt-8'>
                I'm a dedicated and dynamic Full-Stack Developer with a knack for turning
                complex problems into elegant, user-friendly software solutions. With a rich blend of
                front-end and back-end expertise, I bridge the gap between graphical design and technical
                implementation, ensuring a seamless, intuitive user experience.
              </p>
            </div>
            <img 
              data-aos="fade-up" data-aos-anchor-placement="center-bottom"
              src={programando} 
              alt="programando" 
              className='w-full rounded-[30px] mt-12'  
            />
          </div>

          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full font-bold text-cyan-300 text-[30px] mt-12'>
            Top Qualities:
          </p>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-2 mt-6 text-justify'>
            <p className='text-cyan-300 text-[40px]'>•</p>
            <p className='text-[20px]'>Fervent enthusiasm for technology and its transformative power</p>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-2 mt-6 text-justify'>
            <p className='text-cyan-300 text-[40px]'>•</p>
            <p className='text-[20px]'>Constantly exploring emerging trends</p>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-2 mt-6 text-justify'>
            <p className='text-cyan-300 text-[40px]'>•</p>
            <p className='text-[20px]'>Regularly refining and enhancing skills</p>
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex flex-row items-center space-x-2 mt-6 text-justify'>
            <p className='text-cyan-300 text-[40px]'>•</p>
            <p className='text-[20px]'>Consistently growing through lessons learned from mistakes</p>
          </div>

          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[30px] text-cyan-300 font-bold mt-12'>
            Let's build
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[30px] text-cyan-300 font-bold mb-12'>
            The future together!
          </p>
        </div>
      </MobileComponent>
    </>
    
  )
}
/* 
Structuring the "About" Section Content:
Introduction:

Text: Start with a brief introduction about your initial interest in electronics and telecommunications engineering and how the pandemic shifted your focus to digital solutions.
Visual: A timeline graphic could be a great visual start, showing the transition from 2018 to the present.
The Shift to Development:

Text: Discuss the pivot to application development, highlighting your self-motivation during the pandemic.
Visual: Accompany this with an image or icon that represents a pivotal moment or an 'aha' moment.
Python and Problem-Solving:

Text: Narrate your journey of learning Python and how it opened your eyes to solving problems programmatically.
Visual: Use code snippets or a Python logo to visually break the text.
Diving into UI/UX:

Text: Explain your progression into HTML, CSS, and JavaScript to build user-friendly interfaces.
Visual: Showcase snippets of UI elements or a collage of interfaces you've designed.
Embracing React:

Text: Share your decision to learn React.js, influenced by industry trends and job market demands.
Visual: Include logos of React and other frameworks, or a simple bar chart showing the popularity or demand of React.
Professional Milestone:

Text: Detail your first job experience developing an invoicing system and your self-taught journey into backend solutions.
Visual: A case study layout for the invoicing system project, with images or diagrams.
Backend Solutions:

Text: Discuss your exploration of backend services like Firebase and AWS, emphasizing the benefits they brought to your development process.
Visual: Logos of Firebase and AWS, or a flowchart showing the backend structure.
E-commerce Success:

Text: Describe the successful e-commerce website project for MrPuff, highlighting client satisfaction.
Visual: Screenshots of the e-commerce platform or a testimonial quote from the client.
AWS Amplify and Current Focus:

Text: Talk about your current preference for AWS Amplify and its impact on your development workflow.
Visual: A feature list or icon set representing AWS Amplify's offerings.
Tourify Project:

Text: Conclude with your most significant project, Tourify, and its role in the real estate market.
Visual: Interactive elements like a mini-gallery of the website or a short video tour.
Visual and Layout Tips:
Whitespace: Use plenty of whitespace to give each section of text and visuals room to breathe.
Consistent Branding: Ensure that the use of colors, fonts, and imagery is consistent with your personal branding.
Interactive Elements: Consider adding interactive elements like hover effects on images or clickable elements that lead to more detailed case studies or blog posts.
Testimonials/Quotes: Sprinkle in testimonials or quotes from colleagues, clients, or mentors to add credibility.
Call to Action: End the section with a call to action, inviting visitors to view your projects or contact you.
Remember, the goal is to tell your story in a way that's not only informative but also visually compelling and easy to navigate. Balancing text with visuals will keep the reader engaged and help them remember you and your journey.
*/