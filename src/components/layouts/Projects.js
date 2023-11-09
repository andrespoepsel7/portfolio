import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import extension from '../../assets/images/extensionchrome.gif'
import techextension from '../../assets/images/techextension.png'
import mrpuffims from '../../assets/images/mrpuffims.gif'
import techmrpuff from '../../assets/images/techmrpuff.png'
import stsinvoicer from '../../assets/images/stsinvoicer.gif'
import techsts from '../../assets/images/techsts.png'
import ezimports from '../../assets/images/ezimports.gif'
import techezimports from '../../assets/images/techezimports.png'
import tourifylogin from  '../../assets/images/tourifylogin.gif'
import tourifytour from '../../assets/images/tourifytour.gif'

export default function Projects() {
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[10%] text-white font-roboto'>
            {/* Proyectos generales */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Projects</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mb-8 mt-6'>
              Welcome to the crossroads of creativity and technical acumen — my diverse portfolio of projects. Here, you'll find
              a spectrum of work that spans the cutting-edge of full-stack development and ventures into the intricate world of 
              electronics engineering. Each project is a narrative of my dedication to learning by doing, a personal testament to 
              my self-taught journey through challenges and innovation. As you explore these creations, you'll see the threads of 
              problem-solving and passion for technology that bind them all!
            </p>

            {/* Proyectos Full stack */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-10 text-cyan-300'>Development Projects:</p>

            {/* Pepi's Google extension */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Pepi's google extension:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Introducing my personal productivity booster: a custom-built Google Chrome extension designed to streamline my daily 
              digital workflow. This handy tool is the epitome of simplicity and utility, born from the need to quickly save and 
              categorize important URLs for easy access. Whether it's a deeply nested forum thread or a frequently updated dashboard, 
              this extension allows me to save any link with a custom name, right from the browser window I'm navigating.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Developed using the foundational web trinity of JavaScript, HTML, and CSS, this project was a significant stepping 
              stone in my coding journey. At the time of its creation, my grasp on these technologies was just beginning to solidify. 
              The extension's functionality stands as a testament to my focus on utility over aesthetics during the early stages of 
              my learning curve. While it may not win design awards, it's a tool that I rely on every day, and it represents the 
              practical application of my burgeoning skills.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project is particularly special to me as it marks the starting point of my deep dive into the interactive web. 
              It showcases the raw functionality that JavaScript can bring to HTML and CSS, and sets the stage for the more 
              sophisticated UI/UX implementations in my subsequent projects. It's a clear illustration of progress—not just 
              in terms of code, but in the evolution of a developer's understanding of design and user experience.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={extension} alt="extension" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={techextension} alt="techextension" width="100%" className='rounded-[30px]'/>
            </div>

            {/* MrPuff IMS */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-32 text-cyan-300'>MrPuff IMS (Inventory Management System):</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              MrPuff IMS stands as a hallmark of my foray into full-stack development, embodying the convergence of functionality 
              and design. Created for a vape distribution company, this Inventory Management System (IMS) was engineered to tackle 
              the complexities of managing diverse product inventories across multiple retail and wholesale channels. The challenge 
              was not just to track quantities but to dynamically adjust pricing strategies in real-time, ensuring seamless 
              operations for the client.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project was a series of firsts for me: my inaugural venture with React, my initial brush with TailwindCSS for 
              styling, and my first application of Firebase as a backend solution. The result was a significant leap forward in 
              terms of both aesthetics and functionality. The user interface, enhanced by the utility-first approach of TailwindCSS, 
              offered a clean and intuitive experience, while React's component-based architecture made the application robust and 
              responsive.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              As my first comprehensive full-stack project, MrPuff IMS encapsulated a range of features that were ambitious for 
              a developer at the beginning of their React journey. Despite some functionalities awaiting further development, 
              the system was delivered as a complete and operational tool, ready to empower the client's business operations. 
              It stands as a testament to my growth as a developer and a benchmark for the quality and completeness I strive for 
              in my work.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={mrpuffims} alt="mrpuffims" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={techmrpuff} alt="techmrpuff" width="100%" className='rounded-[30px]'/>
            </div>

            {/* STS Invoicer */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-32 text-cyan-300'>STS Invoicer:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              The STS Invoicer project marked a significant milestone in my development career, as it was the catalyst for my 
              deep dive into backend technologies and third-party API integrations. Developed for STS, a telecommunications company, 
              this web application revolutionized their billing process by transitioning from a labor-intensive manual system to a 
              streamlined, automated invoicing solution.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project was my first encounter with crafting a backend in PHP, a challenge that honed my server-side programming skills 
              and deepened my understanding of web application architecture. It also presented the opportunity to work with external APIs, 
              specifically integrating with the Bolivian national taxing system, which was a pivotal learning experience in handling complex 
              data exchanges and regulatory compliance.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              A key aspect of this application was the implementation of advanced JavaScript features, such as promises and asynchronous 
              calls, which were crucial for managing the intricate workflow of generating and processing invoices in real-time. The knowledge 
              gained from this project was immense, particularly in areas of asynchronous programming and API communication.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Due to confidentiality and respect for the company's proprietary systems, I can only showcase the login interface of the STS Invoicer. 
              However, even this glimpse reflects the application's professional and secure entry point, setting the stage for the robust functionality 
              that lies within. This project not only delivered substantial value to the client but also represented a significant leap in my technical 
              capabilities, solidifying my confidence in handling full-scale, enterprise-level web applications.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={stsinvoicer} alt="stsinvoicer" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={techsts} alt="techsts" width="100%" className='rounded-[30px]'/>
            </div>

            {/* EZImports */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-32 text-cyan-300'>EZImports:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              The EZImports website project was a vibrant canvas where my UI design skills truly began to flourish. With the goal of demystifying the 
              import process for potential clients, the website served as a digital brochure, elucidating the company's services with clarity and visual 
              appeal. This project was where I first leveraged Figma to create and implement design assets, marking a significant enhancement in the 
              visual aspect of my work.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Utilizing React and TailwindCSS, I crafted a user interface that was not only responsive but also engaging, with a keen focus on user 
              experience. The integration of AWS Amplify as the backend for the first time was a game-changer, offering a suite of services that streamlined 
              development and provided a robust infrastructure for the website's features, including user authentication and data management.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              The implementation of AWS Simple Notification Service (SNS) was instrumental in establishing a reliable communication channel for order tracking 
              and service requests, ensuring that the company stayed connected with its clients. Additionally, the introduction of animation-on-scroll (AOS) 
              for on-page elements brought a dynamic and modern feel to the user interactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project was a comprehensive display of my growing expertise in full-stack development and my newfound passion for UI design. It stands as a 
              testament to my ability to integrate various technologies to deliver a cohesive and functional digital experience. The EZImports website not only 
              elevated the company's online presence but also solidified my love for AWS Amplify and the endless possibilities it brings to web development.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={ezimports} alt="ezimports" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={techezimports} alt="techezimports" width="100%" className='rounded-[30px]'/>
            </div>

            {/* Tourify */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-32 text-cyan-300'>Tourify:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Tourify is where my vision for a comprehensive real estate visualization service came to life. This web application isn't just a platform 
              for showcasing virtual tours; it's a full-fledged ecosystem designed to cater to the needs of property seekers, real estate agents, and 
              administrators alike. With its intuitive navigation and 360° technology, Tourify elevates the property viewing experience to a new level 
              of immersion and convenience.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              For the casual user, Tourify offers a seamless property search experience, with filters for cities, zones, sizes, price ranges, and more, 
              mirroring the sophistication of leading real estate platforms. Agents looking to create and manage virtual tours find a streamlined process 
              awaiting them, complete with automated WhatsApp and email confirmations once a tour is requested.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              A significant leap in this project was the integration of digital payments, enabling a fully digital transaction from tour request to completion. 
              This not only streamlined the process but is also meant to position Tourify at the forefront of digital real estate services. For the first time, I navigated 
              the complexities of embedding a payment gateway, ensuring secure and efficient transactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Administrators are empowered with robust management tools, from overseeing tour requests to tracking payments and user activity. The flexibility 
              extends to users who wish to embed their virtual tours on personal websites through iframes, offering a versatile solution for various user needs.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              The introduction of corporate emails and the implementation of Mailgun for email services marked Tourify's entry into the realm of professional 
              business services. This project was a blend of technical innovation and business acumen, resulting in a service model that offers both one-time 
              tour creation and subscription options for ongoing access to virtual tours.
              Tourify stands as a testament to my commitment to delivering end-to-end solutions that not only meet but exceed the expectations of a modern 
              digital enterprise.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={tourifylogin} alt="tourifylogin" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src={tourifytour} alt="tourifytour" width="100%"/>
            </div>




            {/* Proyectos electrónica */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-16 text-cyan-300'>Electronics Projects:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mb-10 mt-8'>
              Venturing beyond the digital interfaces and server scripts, this section unveils my explorations into electronics 
              engineering. These projects may diverge from the path of full-stack development, but they are integral to my story, 
              showcasing my zeal for learning and my hands-on approach to education. They reflect a willingness to delve into new 
              territories and the joy I find in the tactile world of circuits and systems. Each endeavor here stands as proof of my 
              multifaceted interests and my belief that a true engineer's learning never ceases.
            </p>


            {/* Conclusión */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-10 text-cyan-300'>End of the journey... ?</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mb-10 mt-8'>
              The journey through my project gallery concludes here, but the path of innovation continues. The full-stack and 
              electronics projects you've seen are but waypoints in my continuous pursuit of knowledge and excellence. They 
              illustrate not just a skill set, but a mindset — one that embraces complexity, cherishes learning, and thrives 
              on turning ideas into reality. As I forge ahead, I carry with me the lessons from each circuit soldered and each 
              line of code written, eager for the next challenge and the next opportunity to learn, create, and innovate.
            </p>

          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[5%] text-white font-roboto'>
            {/* Proyectos generales */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Projects</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mb-8 mt-6'>
              Welcome to the crossroads of creativity and technical acumen — my diverse portfolio of projects. Here, you'll find
              a spectrum of work that spans the cutting-edge of full-stack development and ventures into the intricate world of 
              electronics engineering. Each project is a narrative of my dedication to learning by doing, a personal testament to 
              my self-taught journey through challenges and innovation. As you explore these creations, you'll see the threads of 
              problem-solving and passion for technology that bind them all!
            </p>

            {/* Proyectos Full stack */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-10 text-cyan-300'>Development Projects:</p>

            {/* Pepi's Google extension */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Pepi's google extension:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-4'>
              Introducing my personal productivity booster: a custom-built Google Chrome extension designed to streamline my daily 
              digital workflow. This handy tool is the epitome of simplicity and utility, born from the need to quickly save and 
              categorize important URLs for easy access. Whether it's a deeply nested forum thread or a frequently updated dashboard, 
              this extension allows me to save any link with a custom name, right from the browser window I'm navigating.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              Developed using the foundational web trinity of JavaScript, HTML, and CSS, this project was a significant stepping 
              stone in my coding journey. At the time of its creation, my grasp on these technologies was just beginning to solidify. 
              The extension's functionality stands as a testament to my focus on utility over aesthetics during the early stages of 
              my learning curve. While it may not win design awards, it's a tool that I rely on every day, and it represents the 
              practical application of my burgeoning skills.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              This project is particularly special to me as it marks the starting point of my deep dive into the interactive web. 
              It showcases the raw functionality that JavaScript can bring to HTML and CSS, and sets the stage for the more 
              sophisticated UI/UX implementations in my subsequent projects. It's a clear illustration of progress—not just 
              in terms of code, but in the evolution of a developer's understanding of design and user experience.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={extension} alt="extension" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={techextension} alt="techextension" width="100%" className='rounded-[30px]'/>
            </div>

            {/* MrPuff IMS */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>MrPuff IMS (Inventory Management System):</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-4'>
              MrPuff IMS stands as a hallmark of my foray into full-stack development, embodying the convergence of functionality 
              and design. Created for a vape distribution company, this Inventory Management System (IMS) was engineered to tackle 
              the complexities of managing diverse product inventories across multiple retail and wholesale channels. The challenge 
              was not just to track quantities but to dynamically adjust pricing strategies in real-time, ensuring seamless 
              operations for the client.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              This project was a series of firsts for me: my inaugural venture with React, my initial brush with TailwindCSS for 
              styling, and my first application of Firebase as a backend solution. The result was a significant leap forward in 
              terms of both aesthetics and functionality. The user interface, enhanced by the utility-first approach of TailwindCSS, 
              offered a clean and intuitive experience, while React's component-based architecture made the application robust and 
              responsive.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              As my first comprehensive full-stack project, MrPuff IMS encapsulated a range of features that were ambitious for 
              a developer at the beginning of their React journey. Despite some functionalities awaiting further development, 
              the system was delivered as a complete and operational tool, ready to empower the client's business operations. 
              It stands as a testament to my growth as a developer and a benchmark for the quality and completeness I strive for 
              in my work.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={mrpuffims} alt="mrpuffims" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={techmrpuff} alt="techmrpuff" width="100%" className='rounded-[30px]'/>
            </div>

            {/* STS Invoicer */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>STS Invoicer:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-4'>
              The STS Invoicer project marked a significant milestone in my development career, as it was the catalyst for my 
              deep dive into backend technologies and third-party API integrations. Developed for STS, a telecommunications company, 
              this web application revolutionized their billing process by transitioning from a labor-intensive manual system to a 
              streamlined, automated invoicing solution.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              This project was my first encounter with crafting a backend in PHP, a challenge that honed my server-side programming skills 
              and deepened my understanding of web application architecture. It also presented the opportunity to work with external APIs, 
              specifically integrating with the Bolivian national taxing system, which was a pivotal learning experience in handling complex 
              data exchanges and regulatory compliance.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              A key aspect of this application was the implementation of advanced JavaScript features, such as promises and asynchronous 
              calls, which were crucial for managing the intricate workflow of generating and processing invoices in real-time. The knowledge 
              gained from this project was immense, particularly in areas of asynchronous programming and API communication.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              Due to confidentiality and respect for the company's proprietary systems, I can only showcase the login interface of the STS Invoicer. 
              However, even this glimpse reflects the application's professional and secure entry point, setting the stage for the robust functionality 
              that lies within. This project not only delivered substantial value to the client but also represented a significant leap in my technical 
              capabilities, solidifying my confidence in handling full-scale, enterprise-level web applications.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={stsinvoicer} alt="stsinvoicer" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={techsts} alt="techsts" width="100%" className='rounded-[30px]'/>
            </div>

            {/* EZImports */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>EZImports:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-4'>
              The EZImports website project was a vibrant canvas where my UI design skills truly began to flourish. With the goal of demystifying the 
              import process for potential clients, the website served as a digital brochure, elucidating the company's services with clarity and visual 
              appeal. This project was where I first leveraged Figma to create and implement design assets, marking a significant enhancement in the 
              visual aspect of my work.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              Utilizing React and TailwindCSS, I crafted a user interface that was not only responsive but also engaging, with a keen focus on user 
              experience. The integration of AWS Amplify as the backend for the first time was a game-changer, offering a suite of services that streamlined 
              development and provided a robust infrastructure for the website's features, including user authentication and data management.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              The implementation of AWS Simple Notification Service (SNS) was instrumental in establishing a reliable communication channel for order tracking 
              and service requests, ensuring that the company stayed connected with its clients. Additionally, the introduction of animation-on-scroll (AOS) 
              for on-page elements brought a dynamic and modern feel to the user interactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              This project was a comprehensive display of my growing expertise in full-stack development and my newfound passion for UI design. It stands as a 
              testament to my ability to integrate various technologies to deliver a cohesive and functional digital experience. The EZImports website not only 
              elevated the company's online presence but also solidified my love for AWS Amplify and the endless possibilities it brings to web development.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={ezimports} alt="ezimports" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={techezimports} alt="techezimports" width="100%" className='rounded-[30px]'/>
            </div>

            {/* Tourify */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Tourify:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-4'>
              Tourify is where my vision for a comprehensive real estate visualization service came to life. This web application isn't just a platform 
              for showcasing virtual tours; it's a full-fledged ecosystem designed to cater to the needs of property seekers, real estate agents, and 
              administrators alike. With its intuitive navigation and 360° technology, Tourify elevates the property viewing experience to a new level 
              of immersion and convenience.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              For the casual user, Tourify offers a seamless property search experience, with filters for cities, zones, sizes, price ranges, and more, 
              mirroring the sophistication of leading real estate platforms. Agents looking to create and manage virtual tours find a streamlined process 
              awaiting them, complete with automated WhatsApp and email confirmations once a tour is requested.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              A significant leap in this project was the integration of digital payments, enabling a fully digital transaction from tour request to completion. 
              This not only streamlined the process but is also meant to position Tourify at the forefront of digital real estate services. For the first time, I navigated 
              the complexities of embedding a payment gateway, ensuring secure and efficient transactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              Administrators are empowered with robust management tools, from overseeing tour requests to tracking payments and user activity. The flexibility 
              extends to users who wish to embed their virtual tours on personal websites through iframes, offering a versatile solution for various user needs.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mt-8'>
              The introduction of corporate emails and the implementation of Mailgun for email services marked Tourify's entry into the realm of professional 
              business services. This project was a blend of technical innovation and business acumen, resulting in a service model that offers both one-time 
              tour creation and subscription options for ongoing access to virtual tours.
              Tourify stands as a testament to my commitment to delivering end-to-end solutions that not only meet but exceed the expectations of a modern 
              digital enterprise.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={tourifylogin} alt="tourifylogin" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src={tourifytour} alt="tourifytour" width="100%"/>
            </div>




            {/* Proyectos electrónica */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-8 text-cyan-300'>Electronics Projects:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mb-10 mt-4'>
              Venturing beyond the digital interfaces and server scripts, this section unveils my explorations into electronics 
              engineering. These projects may diverge from the path of full-stack development, but they are integral to my story, 
              showcasing my zeal for learning and my hands-on approach to education. They reflect a willingness to delve into new 
              territories and the joy I find in the tactile world of circuits and systems. Each endeavor here stands as proof of my 
              multifaceted interests and my belief that a true engineer's learning never ceases.
            </p>


            {/* Conclusión */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-10 text-cyan-300'>End of the journey... ?</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[18px] text-justify mb-10 mt-8'>
              The journey through my project gallery concludes here, but the path of innovation continues. The full-stack and 
              electronics projects you've seen are but waypoints in my continuous pursuit of knowledge and excellence. They 
              illustrate not just a skill set, but a mindset — one that embraces complexity, cherishes learning, and thrives 
              on turning ideas into reality. As I forge ahead, I carry with me the lessons from each circuit soldered and each 
              line of code written, eager for the next challenge and the next opportunity to learn, create, and innovate.
            </p>
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
