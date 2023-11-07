import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import timeline from '../../assets/images/timeline.png'
import python from '../../assets/images/python.png'
import js from '../../assets/images/jshtmlcss.png'
import php from '../../assets/images/php.png'
import amplify from '../../assets/images/amplify.png'
import stack from '../../assets/images/stack.png'

export default function About() {
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[10%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='mt-8 mb-6 text-cyan-300 text-[30px] font-bold'>About me</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mb-10'>
              Embarking on a journey in electronics and telecommunications engineering in 2018,
              I was poised to explore the intricate world of technology. However, as the global 
              landscape shifted with the onset of the pandemic, so did my academic and professional 
              trajectory. The digital transformation of society sparked a newfound passion within me — 
              the art of developing applications. This pivotal moment marked the beginning of a quest; a 
              quest to harness the power of programming to create impactful digital solutions.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={timeline} alt="timeline" className='rounded-[25px]'/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              As the world navigated the uncharted waters of the pandemic, I found my academic pursuits 
              transitioning to a virtual realm. It was during this digital metamorphosis that my fascination 
              with application development took root. The more the world leaned into digital solutions for 
              new challenges, the more I was drawn to the art and science of creating applications. This 
              period wasn't just about adaptation; it was an awakening to the endless possibilities that 
              coding and software development presented. It was here, amidst global change, that I began 
              my self-directed journey into the world of programming, starting with the versatile and 
              accessible language of Python.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={python} alt="python"/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              With Python as my compass, I navigated the vast seas of programming, discovering the power 
              of logic to unravel complex problems. This language, with its clear syntax and versatility, 
              became the foundation upon which I built my coding prowess. It was more than learning to code; 
              it was learning to think differently, to approach problems with a programmer's mindset. As my 
              skills sharpened, so did my resolve to craft not just functional, but also aesthetically 
              pleasing and user-centric software solutions.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={js} alt="jshtmlcss" />
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              My journey then took a creative turn towards the realms of UI/UX design. Armed with HTML, 
              CSS, and JavaScript, I began sculpting user interfaces that were not only intuitive but 
              also visually engaging. This was a canvas where functionality met beauty, and every line 
              of code was a stroke of creativity. It was here that I truly appreciated the artistry in 
              coding, as I transformed user needs into digital experiences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mb-10'>
              The evolution of web technologies beckoned, and I heeded the call by embracing React.js. 
              This powerful framework opened new doors to building dynamic user interfaces with stateful 
              components. React didn't just change the way I coded; it revolutionized the way I thought 
              about application architecture. With its robust ecosystem and community support, I honed 
              my skills in crafting modern, scalable, and reactive web applications.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-cyan-300 text-[40px] font-bold'>
              React Js and its beauty
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              My odyssey in development led me to the server's door, where the backbone of applications 
              resides. Initially, I ventured into the realm of PHP, crafting custom backends that connected 
              seamlessly with front-end interfaces. This experience was invaluable, laying bare the intricacies 
              of server-side scripting and database interactions. Yet, my quest for efficiency and scalability 
              urged me to explore further as I didn't like PHP. That is when Firebase entered the scene, offering 
              a suite of tools that simplified the backend process with its real-time database and authentication 
              services. It was a step towards the modern, serverless architectures that promised swifter 
              development cycles.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={php} alt="php" className='rounded-[25px] mx-[10%]'/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              But the landscape of backend technologies is ever-evolving, and it wasn't long before Amazon Web 
              Services (AWS) caught my attention. The allure of AWS Amplify was irresistible—a platform offering 
              not just backend services but a complete ecosystem for building and deploying apps. It was here 
              that I found the holy grail of backend development: a robust infrastructure that was both powerful 
              and developer-friendly. Amplify's capabilities in API management, lambda functions, authentication, 
              and encryption transformed my approach to building applications. It was a paradigm shift, enabling 
              me to develop at an unprecedented pace, with the confidence that AWS's secure and scalable 
              environment was the backbone of my creations.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={amplify} alt="amplify" className='rounded-[25px] mx-[10%]' />
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              In the ever-evolving tapestry of web development, I discovered the elegance of TailwindCSS, a utility-first 
              framework that revolutionized the way I approached styling. In harmony with React's component-based architecture, 
              TailwindCSS enabled me to weave intricate web designs with efficiency and precision. This trinity of 
              technologies—React for the frontend, AWS Amplify for the backend, and TailwindCSS for styling—became 
              the cornerstone of my full-stack development suite. Together, they empowered me to build seamless, 
              scalable, and aesthetically compelling digital experiences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify my-10'>
              Yet, the journey of a developer is one of perpetual learning. With each project, I integrate various 
              UI/UX technologies, ensuring that every application is not only functional but also intuitive and 
              delightful to the user. As I continue to navigate the vast ocean of technological advancements, my 
              toolkit expands, embracing new methodologies and innovations. I stand today as a developer who not 
              only builds for the present but also eagerly anticipates and prepares for the future of technology.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={stack} alt="stack" className='rounded-[25px] mx-[10%] mb-12' />
          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[5%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='mt-8 mb-6 text-cyan-300 text-[40px] font-bold'>About me</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mb-10'>
              Embarking on a journey in electronics and telecommunications engineering in 2018,
              I was poised to explore the intricate world of technology. However, as the global 
              landscape shifted with the onset of the pandemic, so did my academic and professional 
              trajectory. The digital transformation of society sparked a newfound passion within me — 
              the art of developing applications. This pivotal moment marked the beginning of a quest; a 
              quest to harness the power of programming to create impactful digital solutions.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={timeline} alt="timeline" className='rounded-[25px]'/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              As the world navigated the uncharted waters of the pandemic, I found my academic pursuits 
              transitioning to a virtual realm. It was during this digital metamorphosis that my fascination 
              with application development took root. The more the world leaned into digital solutions for 
              new challenges, the more I was drawn to the art and science of creating applications. This 
              period wasn't just about adaptation; it was an awakening to the endless possibilities that 
              coding and software development presented. It was here, amidst global change, that I began 
              my self-directed journey into the world of programming, starting with the versatile and 
              accessible language of Python.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={python} alt="python"/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              With Python as my compass, I navigated the vast seas of programming, discovering the power 
              of logic to unravel complex problems. This language, with its clear syntax and versatility, 
              became the foundation upon which I built my coding prowess. It was more than learning to code; 
              it was learning to think differently, to approach problems with a programmer's mindset. As my 
              skills sharpened, so did my resolve to craft not just functional, but also aesthetically 
              pleasing and user-centric software solutions.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={js} alt="jshtmlcss" />
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              My journey then took a creative turn towards the realms of UI/UX design. Armed with HTML, 
              CSS, and JavaScript, I began sculpting user interfaces that were not only intuitive but 
              also visually engaging. This was a canvas where functionality met beauty, and every line 
              of code was a stroke of creativity. It was here that I truly appreciated the artistry in 
              coding, as I transformed user needs into digital experiences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mb-10'>
              The evolution of web technologies beckoned, and I heeded the call by embracing React.js. 
              This powerful framework opened new doors to building dynamic user interfaces with stateful 
              components. React didn't just change the way I coded; it revolutionized the way I thought 
              about application architecture. With its robust ecosystem and community support, I honed 
              my skills in crafting modern, scalable, and reactive web applications.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-cyan-300 text-[30px] font-bold'>
              React Js and its beauty
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              My odyssey in development led me to the server's door, where the backbone of applications 
              resides. Initially, I ventured into the realm of PHP, crafting custom backends that connected 
              seamlessly with front-end interfaces. This experience was invaluable, laying bare the intricacies 
              of server-side scripting and database interactions. Yet, my quest for efficiency and scalability 
              urged me to explore further as I didn't like PHP. That is when Firebase entered the scene, offering 
              a suite of tools that simplified the backend process with its real-time database and authentication 
              services. It was a step towards the modern, serverless architectures that promised swifter 
              development cycles.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={php} alt="php" className='rounded-[25px] mx-[5%]'/>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              But the landscape of backend technologies is ever-evolving, and it wasn't long before Amazon Web 
              Services (AWS) caught my attention. The allure of AWS Amplify was irresistible—a platform offering 
              not just backend services but a complete ecosystem for building and deploying apps. It was here 
              that I found the holy grail of backend development: a robust infrastructure that was both powerful 
              and developer-friendly. Amplify's capabilities in API management, lambda functions, authentication, 
              and encryption transformed my approach to building applications. It was a paradigm shift, enabling 
              me to develop at an unprecedented pace, with the confidence that AWS's secure and scalable 
              environment was the backbone of my creations.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={amplify} alt="amplify" className='rounded-[25px] mx-[5%]' />
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              In the ever-evolving tapestry of web development, I discovered the elegance of TailwindCSS, a utility-first 
              framework that revolutionized the way I approached styling. In harmony with React's component-based architecture, 
              TailwindCSS enabled me to weave intricate web designs with efficiency and precision. This trinity of 
              technologies—React for the frontend, AWS Amplify for the backend, and TailwindCSS for styling—became 
              the cornerstone of my full-stack development suite. Together, they empowered me to build seamless, 
              scalable, and aesthetically compelling digital experiences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify my-10'>
              Yet, the journey of a developer is one of perpetual learning. With each project, I integrate various 
              UI/UX technologies, ensuring that every application is not only functional but also intuitive and 
              delightful to the user. As I continue to navigate the vast ocean of technological advancements, my 
              toolkit expands, embracing new methodologies and innovations. I stand today as a developer who not 
              only builds for the present but also eagerly anticipates and prepares for the future of technology.
            </p>
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src={stack} alt="stack" className='rounded-[25px] mx-[5%] mb-12' />
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
