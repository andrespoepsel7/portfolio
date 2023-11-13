import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import ReactPlayer from 'react-player/lazy'
// import extension from '../../assets/images/extensionchrome.gif'
// import techextension from '../../assets/images/techextension.png'
// import mrpuffims from '../../assets/images/mrpuffims.gif'
// import techmrpuff from '../../assets/images/techmrpuff.png'
// import stsinvoicer from '../../assets/images/stsinvoicer.gif'
// import techsts from '../../assets/images/techsts.png'
// import ezimports from '../../assets/images/ezimports.gif'
// import techezimports from '../../assets/images/techezimports.png'
// import tourifylogin from  '../../assets/images/tourifylogin.gif'
// import tourifytour from '../../assets/images/tourifytour.gif'

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
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/extensionchrome.gif" alt="extension" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techextension.png" alt="techextension" width="100%" className='rounded-[30px]'/>
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
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/mrpuffims.gif" alt="mrpuffims" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techmrpuff.png" alt="techmrpuff" width="100%" className='rounded-[30px]'/>
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
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/stsinvoicer.gif" alt="stsinvoicer" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techsts.png" alt="techsts" width="100%" className='rounded-[30px]'/>
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
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/ezimports.gif" alt="ezimports" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techezimports.png" alt="techezimports" width="100%" className='rounded-[30px]'/>
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
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/tourifylogin.gif" alt="tourifylogin" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6 px-[10%]'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/tourifytour.gif" alt="tourifytour" width="100%"/>
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

            {/* Led Cube */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>4x4x4 LED Cube:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Diving into the realm of three-dimensional programming and design, I embarked on a project purely for the joy of 
              creation and learning: a 4x4x4 LED cube. This luminous puzzle consisted of 64 LEDs arranged in a perfect cube, 
              presenting not just a visual spectacle but also a challenge in spatial programming.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              The core of this project was an Arduino Uno, a testament to its accessibility and versatility for hobbyists and 
              professionals alike. The objective was straightforward yet intriguing: to manipulate a three-dimensional array in 
              C++ that would control the individual LEDs, creating patterns and designs that could dance through the cube in 
              mesmerizing sequences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              As I soldered each LED and wrote the code that would bring them to life, I gained a deeper understanding of 
              how software translates into physical space. This LED cube was more than a decorative piece; it was a hands-on 
              exercise in managing multi-dimensional arrays and translating that into a tangible, interactive object.
            </p>
            
            <div className='w-full flex flex-row'>
              <div className='flex flex-col w-1/2'>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  Programming the microcontroller with C++ allowed me to fine-tune every aspect of the clock's behavior, from the 
                  brightness of the LEDs to the precision of the alarms. This project was as much a lesson in electronics and 
                  programming as it was in aesthetic design.
                </p>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  The completion of this LED cube was a delightful foray into the world of embedded systems and a celebration of the 
                  harmonious blend of hardware and software. It stands as a glowing representation of my enthusiasm for tackling new 
                  concepts and the satisfaction found in the art of making.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-1/2 flex items-center justify-center mt-4 px-[10%]'>
                <ReactPlayer
                  url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/LedCube.MP4"
                  loop={true}
                  controls={true}
                  volume={0}
                  muted={true}
                  width="250px"
                  pip={false}
                  light={true}
                />
              </div>
            </div>

            {/* Reloj Digital */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Digital Desk Clock:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Stepping away from the pixels and into the physical world, one of my cherished creations is a digital clock that blends 
              traditional craftsmanship with modern technology. This isn't just any timepiece; it's a custom-designed, non-wearable 
              alarm clock that serves both functionality and artistry, crafted to greet me each morning.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              At the heart of this elegant timekeeper is the robust ATmega2560 microcontroller, chosen for its ample features and 
              reliability. I delved into the intricacies of real-time clock (RTC) modules to ensure precise timekeeping and alarm 
              functionality. The challenge was to create a display that was both energy-efficient and visually striking. Through 
              the implementation of multiplexing algorithms, I was able to drive numerous LEDs to display hours, minutes, seconds, 
              and alarm indicators without compromising on power consumption.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              The clock's body, initially shaped from fine wood, was ingeniously enveloped in a wood-like plastic veneer. This 
              design choice was deliberate—to create the illusion of LED lights seamlessly emerging from the wood itself, 
              resulting in a mesmerizing luminescence that captures the eye.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Programming the microcontroller with C++ allowed me to fine-tune every aspect of the clock's behavior, from the 
              brightness of the LEDs to the precision of the alarms. This project was as much a lesson in electronics and 
              programming as it was in aesthetic design.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This digital clock is more than an object; it's a daily companion that stands as a testament to my love for 
              blending technology with the tactile beauty of natural materials. It represents my ability to transcend the 
              boundaries between the digital and the physical, crafting pieces that are not only functional but also evoke 
              a sense of wonder.
            </p>
            <div className='w-full grid grid-cols-2 gap-5 px-[10%]'>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj11.jpg" alt="reloj1" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj22.jpg" alt="reloj2" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj33.jpg" alt="reloj3" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj44.jpg" alt="reloj4" width="100%" className='rounded-[30px]'/>
              </div>
            </div>

            {/* Hand Controlled Car */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Gesture-Controlled Car:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Among the projects that hold a special place in my portfolio, the gesture-controlled car stands out as a pinnacle 
              of interactive hardware innovation. This project was not just about building a remote-controlled vehicle; it was 
              about redefining control mechanisms through the intuitive motion of the human hand.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              At the core of this venture was a pair of HC-05 Bluetooth modules set in a master-slave configuration, establishing 
              a seamless communication link between the controller and the car. The vehicle itself was powered by an Arduino Nano, 
              driving a motor H-bridge controller to manage the motors' speed and direction with precision.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              The true magic, however, was housed within the glove controller. Integrating an Arduino LilyPad for its compact 
              form factor, the glove was fitted with an MPU5060 gyroscope to detect hand tilts and rotations. This allowed for 
              a natural and responsive driving experience, translating the driver's gestures into real-time movement of the car.
            </p>
            
            <div className='w-full flex flex-row'>
              <div className='flex flex-col w-1/2'>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  The development process was a rigorous test of problem-solving and real-time system design. Mapping the hand's 
                  orientation to the car's movement required meticulous calibration, ensuring that a neutral hand position would 
                  halt the vehicle, while tilts and turns would send it in the desired direction.
                </p>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  This project was a testament to the power of embedded systems and the potential of wearable technology. It 
                  encapsulated my growing expertise in marrying software logic with hardware to create solutions that could one 
                  day evolve into viable commercial products. The success of this gesture-controlled car was a moment of realization 
                  for me, affirming my passion for bringing software-driven hardware solutions to life and the endless possibilities 
                  that lay within this domain.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-1/2 flex items-center justify-center mt-4 px-[10%]'>
                <ReactPlayer
                  url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/car.MP4"
                  loop={true}
                  controls={true}
                  volume={0}
                  muted={true}
                  width="100%"
                  pip={false}
                  light={true}
                />
              </div>
            </div>
            

            {/* Automated Greenhouse irrigation system */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Greenhouse Irrigation System:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              My journey into the realm of embedded systems reached a significant milestone with the creation of an automated
              irrigation system for a private client's greenhouse. This project was a symphony of environmental sensors, control 
              algorithms, and user interfaces, all orchestrated to maintain the perfect growing conditions for a garden sanctuary.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              At the heart of the system was the reliable ATmega2560 microcontroller, chosen for its robustness and versatility. 
              It was programmed in C++ to continuously monitor temperature and humidity levels, making intelligent decisions to 
              activate irrigation, fans, or both. The system's ability to adapt to real-time environmental data ensured optimal 
              conditions for plant growth, balancing moisture and temperature with precision.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              A key feature of this system was the custom-designed touchscreen panel, which allowed the user to interact with 
              the greenhouse controls directly. The UI, which I designed and developed, offered both an automatic mode for 
              hands-off operation and a manual mode for granular control over the fans and irrigation.
            </p>
            
            <div className='w-full flex flex-row'>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-1/2 flex items-center justify-center mt-4 px-[10%]'>
                <ReactPlayer
                  url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego3.MOV"
                  loop={true}
                  controls={true}
                  volume={0}
                  muted={true}
                  width="100%"
                  pip={false}
                  light={true}
                />
              </div>
              <div className='flex flex-col w-1/2'>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  The integration of power electronics with low-power control circuits was a novel challenge for me. Electronic valves 
                  and micro-sprinklers were meticulously controlled using relays, allowing for efficient water distribution. The fans, 
                  too, were managed to provide adequate ventilation to regulate temperature without overcooling.
                </p>
                <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
                  This project was not just about automating a greenhouse; it was about crafting a comprehensive system that bridged 
                  the gap between user-friendly interfaces and the complex world of power electronics. It stands as a testament to my 
                  ability to deliver a full-stack embedded system solution—from the tactile feedback of a touchscreen UI to the seamless 
                  operation of high-power components—all within the harmonious ecosystem of a thriving greenhouse.
                </p>
              </div>
            </div>
            <div className='w-full grid grid-cols-2 mt-4 gap-5 px-[10%]'>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego2.JPG" alt="riego2" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego1.JPG" alt="riego1" className='rounded-[30px]'/>
              </div>
            </div>

            {/* Smart polarized film control */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Smart Polarized Film Control:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              In the comfort of my own bedroom, I embarked on a project that seamlessly blended the realms of home automation and privacy: 
              the smart control of polarized glass. This innovative endeavor involved retrofitting a standard glass pane with a special 
              film that turns opaque with a 60V electric pulse, traditionally operated by a remote. My goal was to elevate its functionality 
              by integrating it with the Internet of Things (IoT).
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Leveraging the versatility of an ESP32 board, I connected a relay to the transformer's power source, which controlled the polarization 
              state of the glass. The real magic unfolded with the implementation of the Espressif RainMaker framework, which allowed me to create a 
              digital state for the glass that could be managed via my smartphone. This setup also included integration with Alexa for voice-activated 
              control, adding a layer of convenience and futuristic flair.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project was a personal revelation, igniting my passion for IoT and the potential it holds. It demonstrated how a simple idea could 
              be transformed into a sophisticated, tangible product that enhances everyday life. The ability to switch the glass from transparent to 
              opaque with a tap on my phone or a simple voice command to Alexa was not just about modern luxury; it was a testament to the power of 
              IoT in creating smart environments.
            </p>
            
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4 px-[10%]'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/vidrios.MP4"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>

            {/* Custom securiy system */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300'>Custom Security System:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              In the comfort of my own bedroom, I embarked on a project that seamlessly blended the realms of home automation and privacy: 
              the smart control of polarized glass. This innovative endeavor involved retrofitting a standard glass pane with a special 
              film that turns opaque with a 60V electric pulse, traditionally operated by a remote. My goal was to elevate its functionality 
              by integrating it with the Internet of Things (IoT).
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              Leveraging the versatility of an ESP32 board, I connected a relay to the transformer's power source, which controlled the polarization 
              state of the glass. The real magic unfolded with the implementation of the Espressif RainMaker framework, which allowed me to create a 
              digital state for the glass that could be managed via my smartphone. This setup also included integration with Alexa for voice-activated 
              control, adding a layer of convenience and futuristic flair.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-8'>
              This project was a personal revelation, igniting my passion for IoT and the potential it holds. It demonstrated how a simple idea could 
              be transformed into a sophisticated, tangible product that enhances everyday life. The ability to switch the glass from transparent to 
              opaque with a tap on my phone or a simple voice command to Alexa was not just about modern luxury; it was a testament to the power of 
              IoT in creating smart environments.
            </p>
            
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4 px-[10%]'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/Video+Final+2.mp4"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>


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
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[16px] font-light text-justify mb-8 mt-6'>
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
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Introducing my personal productivity booster: a custom-built Google Chrome extension designed to streamline my daily 
              digital workflow. This handy tool is the epitome of simplicity and utility, born from the need to quickly save and 
              categorize important URLs for easy access. Whether it's a deeply nested forum thread or a frequently updated dashboard, 
              this extension allows me to save any link with a custom name, right from the browser window I'm navigating.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              Developed using the foundational web trinity of JavaScript, HTML, and CSS, this project was a significant stepping 
              stone in my coding journey. At the time of its creation, my grasp on these technologies was just beginning to solidify. 
              The extension's functionality stands as a testament to my focus on utility over aesthetics during the early stages of 
              my learning curve. While it may not win design awards, it's a tool that I rely on every day, and it represents the 
              practical application of my burgeoning skills.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              This project is particularly special to me as it marks the starting point of my deep dive into the interactive web. 
              It showcases the raw functionality that JavaScript can bring to HTML and CSS, and sets the stage for the more 
              sophisticated UI/UX implementations in my subsequent projects. It's a clear illustration of progress—not just 
              in terms of code, but in the evolution of a developer's understanding of design and user experience.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/extensionchrome.gif" alt="extension" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techextension.png" alt="techextension" width="100%" className='rounded-[15px]'/>
            </div>

            {/* MrPuff IMS */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>MrPuff IMS (Inventory Management System):</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              MrPuff IMS stands as a hallmark of my foray into full-stack development, embodying the convergence of functionality 
              and design. Created for a vape distribution company, this Inventory Management System (IMS) was engineered to tackle 
              the complexities of managing diverse product inventories across multiple retail and wholesale channels. The challenge 
              was not just to track quantities but to dynamically adjust pricing strategies in real-time, ensuring seamless 
              operations for the client.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              This project was a series of firsts for me: my inaugural venture with React, my initial brush with TailwindCSS for 
              styling, and my first application of Firebase as a backend solution. The result was a significant leap forward in 
              terms of both aesthetics and functionality. The user interface, enhanced by the utility-first approach of TailwindCSS, 
              offered a clean and intuitive experience, while React's component-based architecture made the application robust and 
              responsive.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              As my first comprehensive full-stack project, MrPuff IMS encapsulated a range of features that were ambitious for 
              a developer at the beginning of their React journey. Despite some functionalities awaiting further development, 
              the system was delivered as a complete and operational tool, ready to empower the client's business operations. 
              It stands as a testament to my growth as a developer and a benchmark for the quality and completeness I strive for 
              in my work.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/mrpuffims.gif" alt="mrpuffims" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techmrpuff.png" alt="techmrpuff" width="100%" className='rounded-[15px]'/>
            </div>

            {/* STS Invoicer */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>STS Invoicer:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The STS Invoicer project marked a significant milestone in my development career, as it was the catalyst for my 
              deep dive into backend technologies and third-party API integrations. Developed for STS, a telecommunications company, 
              this web application revolutionized their billing process by transitioning from a labor-intensive manual system to a 
              streamlined, automated invoicing solution.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              This project was my first encounter with crafting a backend in PHP, a challenge that honed my server-side programming skills 
              and deepened my understanding of web application architecture. It also presented the opportunity to work with external APIs, 
              specifically integrating with the Bolivian national taxing system, which was a pivotal learning experience in handling complex 
              data exchanges and regulatory compliance.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              A key aspect of this application was the implementation of advanced JavaScript features, such as promises and asynchronous 
              calls, which were crucial for managing the intricate workflow of generating and processing invoices in real-time. The knowledge 
              gained from this project was immense, particularly in areas of asynchronous programming and API communication.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              Due to confidentiality and respect for the company's proprietary systems, I can only showcase the login interface of the STS Invoicer. 
              However, even this glimpse reflects the application's professional and secure entry point, setting the stage for the robust functionality 
              that lies within. This project not only delivered substantial value to the client but also represented a significant leap in my technical 
              capabilities, solidifying my confidence in handling full-scale, enterprise-level web applications.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/stsinvoicer.gif" alt="stsinvoicer" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techsts.png" alt="techsts" width="100%" className='rounded-[15px]'/>
            </div>

            {/* EZImports */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>EZImports:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The EZImports website project was a vibrant canvas where my UI design skills truly began to flourish. With the goal of demystifying the 
              import process for potential clients, the website served as a digital brochure, elucidating the company's services with clarity and visual 
              appeal. This project was where I first leveraged Figma to create and implement design assets, marking a significant enhancement in the 
              visual aspect of my work.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              Utilizing React and TailwindCSS, I crafted a user interface that was not only responsive but also engaging, with a keen focus on user 
              experience. The integration of AWS Amplify as the backend for the first time was a game-changer, offering a suite of services that streamlined 
              development and provided a robust infrastructure for the website's features, including user authentication and data management.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              The implementation of AWS Simple Notification Service (SNS) was instrumental in establishing a reliable communication channel for order tracking 
              and service requests, ensuring that the company stayed connected with its clients. Additionally, the introduction of animation-on-scroll (AOS) 
              for on-page elements brought a dynamic and modern feel to the user interactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              This project was a comprehensive display of my growing expertise in full-stack development and my newfound passion for UI design. It stands as a 
              testament to my ability to integrate various technologies to deliver a cohesive and functional digital experience. The EZImports website not only 
              elevated the company's online presence but also solidified my love for AWS Amplify and the endless possibilities it brings to web development.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/ezimports.gif" alt="ezimports" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/techezimports.png" alt="techezimports" width="100%" className='rounded-[15px]'/>
            </div>

            {/* Tourify */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Tourify:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Tourify is where my vision for a comprehensive real estate visualization service came to life. This web application isn't just a platform 
              for showcasing virtual tours; it's a full-fledged ecosystem designed to cater to the needs of property seekers, real estate agents, and 
              administrators alike. With its intuitive navigation and 360° technology, Tourify elevates the property viewing experience to a new level 
              of immersion and convenience.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              For the casual user, Tourify offers a seamless property search experience, with filters for cities, zones, sizes, price ranges, and more, 
              mirroring the sophistication of leading real estate platforms. Agents looking to create and manage virtual tours find a streamlined process 
              awaiting them, complete with automated WhatsApp and email confirmations once a tour is requested.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              A significant leap in this project was the integration of digital payments, enabling a fully digital transaction from tour request to completion. 
              This not only streamlined the process but is also meant to position Tourify at the forefront of digital real estate services. For the first time, I navigated 
              the complexities of embedding a payment gateway, ensuring secure and efficient transactions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              Administrators are empowered with robust management tools, from overseeing tour requests to tracking payments and user activity. The flexibility 
              extends to users who wish to embed their virtual tours on personal websites through iframes, offering a versatile solution for various user needs.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-8'>
              The introduction of corporate emails and the implementation of Mailgun for email services marked Tourify's entry into the realm of professional 
              business services. This project was a blend of technical innovation and business acumen, resulting in a service model that offers both one-time 
              tour creation and subscription options for ongoing access to virtual tours.
              Tourify stands as a testament to my commitment to delivering end-to-end solutions that not only meet but exceed the expectations of a modern 
              digital enterprise.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/tourifylogin.gif" alt="tourifylogin" width="100%"/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
              <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/tourifytour.gif" alt="tourifytour" width="100%"/>
            </div>




            {/* Proyectos electrónica */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-8 text-cyan-300'>Electronics Projects:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Venturing beyond the digital interfaces and server scripts, this section unveils my explorations into electronics 
              engineering. These projects may diverge from the path of full-stack development, but they are integral to my story, 
              showcasing my zeal for learning and my hands-on approach to education. They reflect a willingness to delve into new 
              territories and the joy I find in the tactile world of circuits and systems. Each endeavor here stands as proof of my 
              multifaceted interests and my belief that a true engineer's learning never ceases.
            </p>

            {/* Led Cube */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>4x4x4 LED Cube:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Diving into the realm of three-dimensional programming and design, I embarked on a project purely for the joy of 
              creation and learning: a 4x4x4 LED cube. This luminous puzzle consisted of 64 LEDs arranged in a perfect cube, 
              presenting not just a visual spectacle but also a challenge in spatial programming.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The core of this project was an Arduino Uno, a testament to its accessibility and versatility for hobbyists and 
              professionals alike. The objective was straightforward yet intriguing: to manipulate a three-dimensional array in 
              C++ that would control the individual LEDs, creating patterns and designs that could dance through the cube in 
              mesmerizing sequences.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              As I soldered each LED and wrote the code that would bring them to life, I gained a deeper understanding of 
              how software translates into physical space. This LED cube was more than a decorative piece; it was a hands-on 
              exercise in managing multi-dimensional arrays and translating that into a tangible, interactive object.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Programming the microcontroller with C++ allowed me to fine-tune every aspect of the clock's behavior, from the 
              brightness of the LEDs to the precision of the alarms. This project was as much a lesson in electronics and 
              programming as it was in aesthetic design.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The completion of this LED cube was a delightful foray into the world of embedded systems and a celebration of the 
              harmonious blend of hardware and software. It stands as a glowing representation of my enthusiasm for tackling new 
              concepts and the satisfaction found in the art of making.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/LedCube.MP4"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>


            {/* Digital desk clock */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Digital Desk Clock:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Stepping away from the pixels and into the physical world, one of my cherished creations is a digital clock that blends 
              traditional craftsmanship with modern technology. This isn't just any timepiece; it's a custom-designed, non-wearable 
              alarm clock that serves both functionality and artistry, crafted to greet me each morning.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              At the heart of this elegant timekeeper is the robust ATmega2560 microcontroller, chosen for its ample features and 
              reliability. I delved into the intricacies of real-time clock (RTC) modules to ensure precise timekeeping and alarm 
              functionality. The challenge was to create a display that was both energy-efficient and visually striking. Through 
              the implementation of multiplexing algorithms, I was able to drive numerous LEDs to display hours, minutes, seconds, 
              and alarm indicators without compromising on power consumption.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The clock's body, initially shaped from fine wood, was ingeniously enveloped in a wood-like plastic veneer. This 
              design choice was deliberate—to create the illusion of LED lights seamlessly emerging from the wood itself, 
              resulting in a mesmerizing luminescence that captures the eye.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Programming the microcontroller with C++ allowed me to fine-tune every aspect of the clock's behavior, from the 
              brightness of the LEDs to the precision of the alarms. This project was as much a lesson in electronics and 
              programming as it was in aesthetic design.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              This digital clock is more than an object; it's a daily companion that stands as a testament to my love for 
              blending technology with the tactile beauty of natural materials. It represents my ability to transcend the 
              boundaries between the digital and the physical, crafting pieces that are not only functional but also evoke 
              a sense of wonder.
            </p>
            <div className='w-full grid grid-cols-1 gap-2 px-[5%]'>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj11.jpg" alt="reloj1" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj22.jpg" alt="reloj2" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj33.jpg" alt="reloj3" width="100%" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/reloj44.jpg" alt="reloj4" width="100%" className='rounded-[30px]'/>
              </div>
            </div>

            {/* Gesture Controlled Car */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Gesture-Controlled Car:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Among the projects that hold a special place in my portfolio, the gesture-controlled car stands out as a pinnacle 
              of interactive hardware innovation. This project was not just about building a remote-controlled vehicle; it was 
              about redefining control mechanisms through the intuitive motion of the human hand.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The true magic, however, was housed within the glove controller. Integrating an Arduino LilyPad for its compact 
              form factor, the glove was fitted with an MPU5060 gyroscope to detect hand tilts and rotations. This allowed for 
              a natural and responsive driving experience, translating the driver's gestures into real-time movement of the car.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The development process was a rigorous test of problem-solving and real-time system design. Mapping the hand's 
              orientation to the car's movement required meticulous calibration, ensuring that a neutral hand position would 
              halt the vehicle, while tilts and turns would send it in the desired direction.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              This project was a testament to the power of embedded systems and the potential of wearable technology. It 
              encapsulated my growing expertise in marrying software logic with hardware to create solutions that could one 
              day evolve into viable commercial products. The success of this gesture-controlled car was a moment of realization 
              for me, affirming my passion for bringing software-driven hardware solutions to life and the endless possibilities 
              that lay within this domain.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/car.MP4"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>

            {/*  Automated Greenhouse irrigation system */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Greenhouse Irrigation System:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              My journey into the realm of embedded systems reached a significant milestone with the creation of an automated
              irrigation system for a private client's greenhouse. This project was a symphony of environmental sensors, control 
              algorithms, and user interfaces, all orchestrated to maintain the perfect growing conditions for a garden sanctuary.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              At the heart of the system was the reliable ATmega2560 microcontroller, chosen for its robustness and versatility. 
              It was programmed in C++ to continuously monitor temperature and humidity levels, making intelligent decisions to 
              activate irrigation, fans, or both. The system's ability to adapt to real-time environmental data ensured optimal 
              conditions for plant growth, balancing moisture and temperature with precision.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              A key feature of this system was the custom-designed touchscreen panel, which allowed the user to interact with 
              the greenhouse controls directly. The UI, which I designed and developed, offered both an automatic mode for 
              hands-off operation and a manual mode for granular control over the fans and irrigation.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The integration of power electronics with low-power control circuits was a novel challenge for me. Electronic valves 
              and micro-sprinklers were meticulously controlled using relays, allowing for efficient water distribution. The fans, 
              too, were managed to provide adequate ventilation to regulate temperature without overcooling.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              This project was not just about automating a greenhouse; it was about crafting a comprehensive system that bridged 
              the gap between user-friendly interfaces and the complex world of power electronics. It stands as a testament to my 
              ability to deliver a full-stack embedded system solution—from the tactile feedback of a touchscreen UI to the seamless 
              operation of high-power components—all within the harmonious ecosystem of a thriving greenhouse.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego3.MOV"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>
            <div className='w-full grid grid-cols-1 gap-2 px-[5%]'>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego2.JPG" alt="riego2" className='rounded-[30px]'/>
              </div>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-6'>
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/riego1.JPG" alt="riego1" className='rounded-[30px]'/>
              </div>
            </div>


            {/* Custom Security System */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300'>Custom Security System:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              In a blend of personal interest and technological prowess, I developed a sophisticated security system for my bedroom, a project 
              that served as a canvas to demonstrate my capabilities in creating advanced, personalized technology solutions.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Central to this system was the ATmega2560 microcontroller, a choice that provided the necessary computational power and flexibility. 
              The user interface was a custom-designed touchscreen, which I engineered to serve as the control panel for the security features. 
              It was here that users were greeted with the option to access the room via a fingerprint scan or a backup password, offering 
              dual-layer security.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The mechanical ingenuity of this project was in the 3D-printed component fitted inside my door. This piece was crucial as it allowed 
              the door lock to be actuated by a servo motor, seamlessly integrating with the electronic controls. The fingerprint sensor was a pivotal 
              feature, requiring precise programming to ensure flawless operation and selective entry, mirroring the functionality of high-end security systems.
              Internally, I positioned another control unit, enabling a quick exit with the press of a button. This was linked to an interrupt routine, 
              ensuring immediate response and unlocking from the inside, a necessary feature for safety and convenience.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              The development process, particularly the integration of the fingerprint sensor, was complex and demanded a high level of accuracy. 
              It was imperative that the system not only worked flawlessly but also met the high-security standards one would expect from a cutting-edge solution.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              This security system is not just a protective measure; it's a showcase of my ability to conceive and execute a project that combines mechanical 
              design, electronic engineering, and user interface development. It stands as a proof of concept for my skills in creating smart, secure environments 
              with a high degree of personalization and reliability.
            </p>
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-full flex items-center justify-center mt-4'>
              <ReactPlayer
                url="https://portfoliostorage120849-dev.s3.amazonaws.com/public/Video+Final+2.mp4"
                loop={true}
                controls={true}
                volume={0}
                muted={true}
                width="100%"
                pip={false}
                light={true}
              />
            </div>

            {/* Conclusión */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-black text-[30px] mt-10 text-cyan-300'>End of the journey... ?</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[16px] text-justify mb-10 mt-8'>
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
