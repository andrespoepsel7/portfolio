import React from 'react'
import WebComponent from '../reusable/WebComponent'
import MobileComponent from '../reusable/MobileComponent'
import FullScreenDiv from '../reusable/FullScreenDiv'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './genericCss.css'

export default function Hobbies() {

  // SETTINGS FOR SLIDER
  const settings = {
    dots: true,
    lazyLoad: true, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }

  const gymSettings = {
    dots: true,
    lazyLoad: true, 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 300,
  }

  // Arreglos de datos para los viajes
  const dataViajesBolivia = [
    {
      name:'Downtown Sucre',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia1.JPG',
      location:'Sucre',
      country:'Bolivia',
    },
    {
      name:'Castillo De La Glorieta',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia2.JPG',
      location:'Sucre',
      country:'Bolivia',
    },
    {
      name:'Potosí Mines',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia3.JPG',
      location:'Potosí',
      country:'Bolivia',
    },
    {
      name:'Cerro Rico',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia4.JPG',
      location:'Potosí',
      country:'Bolivia',
    },
    {
      name:'Casa De La Moneda',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia5.JPG',
      location:'Potosí',
      country:'Bolivia',
    },
    {
      name:'Cementerio De Trenes',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia6.JPG',
      location:'Uyuni',
      country:'Bolivia',
    },
    {
      name:'Salar De Uyuni',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia7.JPG',
      location:'Uyuni',
      country:'Bolivia',
    },
    {
      name:'Salar De Uyuni',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia8.JPG',
      location:'Uyuni',
      country:'Bolivia',
    },
    {
      name:'Salar De Uyuni',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia9.JPG',
      location:'Uyuni',
      country:'Bolivia',
    },
    {
      name:'Road To Tarija',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia10.JPG',
      location:'Tarija',
      country:'Bolivia',
    },
    {
      name:'Cristo Redentor',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bolivia11.JPG',
      location:'Cochabamba',
      country:'Bolivia',
    },
  ]

  const dataViajesUsa = [
    {
      name:'Lincoln Memorial',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa1.JPG',
      location:'Washington D.C.',
      country:'USA',
    },
    {
      name:'White House',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa3.JPG',
      location:'Washington D.C.',
      country:'USA',
    },
    {
      name:'US Capitol',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa4.JPG',
      location:'Washington D.C.',
      country:'USA',
    },
    {
      name:'National Gallery Of Art',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa5.JPG',
      location:'Washington D.C.',
      country:'USA',
    },
    {
      name:'One World Trade Center',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa6.JPG',
      location:'New York City',
      country:'USA',
    },
    {
      name:'Lower Manhattan',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa7.JPG',
      location:'New York City',
      country:'USA',
    },
    {
      name:'Panoramic Midtown Manhattan',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa8.JPG',
      location:'New York City',
      country:'USA',
    },
    {
      name:'Miami Beach',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa2.JPG',
      location:'Miami',
      country:'USA',
    },
    {
      name:'Miami Beach',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa9.JPG',
      location:'Miami',
      country:'USA',
    },
    {
      name:'Miami Beach',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa10.JPG',
      location:'Miami',
      country:'USA',
    },
    {
      name:'Miami Beach',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa11.jpeg',
      location:'Miami',
      country:'USA',
    },
    {
      name:'Miami Beach',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa13.jpeg',
      location:'Miami',
      country:'USA',
    },
    {
      name:'Islands Of Adventure',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/usa12.jpeg',
      location:'Orlando',
      country:'USA',
    },
  ]

  const dataViajesGer =[
    {
      name:'Drachenburg Castle',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/alemania1.JPG',
      location:'Königswinter',
      country:'Germany',
    },
    {
      name:'Neuschwanstein Castle',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/alemania2.JPG',
      location:'Hohenschwangau',
      country:'Germany',
    },
    {
      name:'Neues Rathaus',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/alemania3.JPG',
      location:'München',
      country:'Germany',
    },
    {
      name:'Allianz Arena Sadium',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/alemania4.JPG',
      location:'München',
      country:'Germany',
    },
    {
      name:'Kölner Dom',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/alemania5.JPG',
      location:'Köln',
      country:'Germany',
    },
  ]

  const dataViajesArg = [
    {
      name:'Monument To Gral. Güemes',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/arg1.jpeg',
      location:'Salta',
      country:'Argentina',
    },
    {
      name:'Basilica San Francisco',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/arg2.jpeg',
      location:'Salta',
      country:'Argentina',
    },
    {
      name:'Cathedral Of salta',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/arg3.jpeg',
      location:'Salta',
      country:'Argentina',
    },
    {
      name:'Puerto Madero',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/arg4.jpeg',
      location:'Buenos Aires',
      country:'Argentina',
    },
    {
      name:'Puerto Madero',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/arg5.jpeg',
      location:'Buenos Aires',
      country:'Argentina',
    },
    {
      name:'Barrio Histórico',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/uru1.jpeg',
      location:'Colonia De Sacramento',
      country:'Uruguay',
    },
    {
      name:'Barrio Histórico',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/uru2.jpeg',
      location:'Colonia De Sacramento',
      country:'Uruguay',
    },
  ]

  const dataViajesPanama = [
    {
      name:'French Park Monument',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/panama1.jpeg',
      location:'Panama City',
      country:'Panama',
    },
    {
      name:'Punta Paitilla',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/panama2.jpeg',
      location:'Panama City',
      country:'Panama',
    },
    {
      name:'Panama Canal (Miraflores Locks)',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/panama3.jpeg',
      location:'Outside Panama City',
      country:'Panama',
    },
  ]

  const dataRoadtrips = [
    {
      name:'Carreras',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip1.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'Islas Flotantes',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip2.jpeg',
      location:'Copacabana',
      country:'Bolivia',
    },
    {
      name:'Yungas',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip3.jpeg',
      location:'La paz',
      country:'Bolivia',
    },
    {
      name:'Rio Abajo',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip4.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'Illimani',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip5.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'La Escondida',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip6.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'Lago Titicaca',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip7.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'Camino Yungas',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip8.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
    {
      name:'Teleferico (Línea Naranja)',
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/roadtrip9.jpeg',
      location:'La Paz',
      country:'Bolivia',
    },
  ]

  const dataGym = [
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/bunjee.gif',
    },
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/frontflip.gif',
    },
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/backflip.gif',
    },
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/gym1.gif',
    },
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/gym2.gif',
    },
    {
      img:'https://portfoliostorage120849-dev.s3.amazonaws.com/public/gym3.gif',
    },
  ]

  // FUNCTIONS
  function getCharacters(str, indexes) {
    return indexes.map(index => str[index]).join('');
  }
  return (
    <>
      <WebComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[10%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Hobbies</p>

            {/* Traveling */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Traveling:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Embracing the joy of discovery, I find fulfillment in exploring new places and creating unforgettable experiences, 
              whether solo or accompanied by family and friends.
            </p>

            {/* Bolivia */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              There's a unique charm in traversing the landscapes of my own country, a journey of rediscovering the beauty and 
              diversity sometimes hidden within it.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Bolivia:</p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesBolivia.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0,1])}</p>
                            <p className='text-xl font-black text-yellow-300'>{getCharacters(d.country, [2,3])}</p>
                            <p className='text-xl font-black text-green-400'>{getCharacters(d.country, [4,5,6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Países */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              I'm deeply grateful for the opportunities to explore beyond borders, enriching my life with new languages, 
              cultures, and perspectives from around the globe.
            </p>
            {/* Estados Unidos */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>United States:</p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesUsa.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0])}</p>
                            <p className='text-xl font-black text-white'>{getCharacters(d.country, [1])}</p>
                            <p className='text-xl font-black text-blue-500'>{getCharacters(d.country, [2])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Germany */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Germany:</p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesGer.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-black'>{getCharacters(d.country, [0, 1, 2])}</p>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [3, 4])}</p>
                            <p className='text-xl font-black text-yellow-500'>{getCharacters(d.country, [5, 6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Argentina and uruguay */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Argentina & Uruguay:</p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesArg.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-blue-500'>{d.country === 'Argentina' ? getCharacters(d.country, [0, 1, 2]):getCharacters(d.country, [0, 1])}</p>
                            <p className='text-xl font-black text-white'>{d.country === 'Argentina' ? getCharacters(d.country, [3, 4, 5]):getCharacters(d.country, [2, 3])}</p>
                            <p className='text-xl font-black text-blue-500'>{d.country === 'Argentina' ? getCharacters(d.country, [6, 7, 8]):getCharacters(d.country, [4, 5, 6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Argentina and uruguay */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Panama:</p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesPanama.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0, 1])}</p>
                            <p className='text-xl font-black text-white'>{getCharacters(d.country, [2, 3])}</p>
                            <p className='text-xl font-black text-blue-500'>{getCharacters(d.country, [4, 5])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Roadtripping */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Road Tripping:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              Road tripping offers me an unparalleled sense of adventure and freedom, especially around my city, where the diverse 
              landscapes unfold in breathtaking beauty just a drive away.
            </p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataRoadtrips.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0,1])}</p>
                            <p className='text-xl font-black text-yellow-300'>{getCharacters(d.country, [2,3])}</p>
                            <p className='text-xl font-black text-green-400'>{getCharacters(d.country, [4,5,6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Family */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Family:</p>
            <div className='w-full flex flex-col items-center justify-center mt-4 px-[20%]'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
                Spending time with my close-knit family is a cherished hobby; we relish in shared activities and experiences, nurturing a 
                bond that inspires my dream of one day building my own family.
              </p>
              <div className='mt-4' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/familia.png" alt="familia" className='rounded-[30px]' />
              </div>
            </div>

            {/* Sports & Gym */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Sports & Gym:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[20px] text-justify mt-4'>
              I thrive on the rush of adrenaline that extreme sports provide, always ensuring safety with proper protection. It's not just about the 
              thrill; it's about challenging my limits. Similarly, my gym routine is more than physical training; it's a testament to the mental 
              fortitude it cultivates. In each rep and run, I find lessons in discipline, perseverance, and the art of delayed gratification. 
              These practices are instrumental in shaping not just my physique but my character, reinforcing the values essential for personal 
              growth and integrity.
            </p>
            <div className='mt-3 mb-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...gymSettings}>
                {dataGym.map((d, i) => (
                  <div 
                    key={i} 
                    className='flex justify-center items-center h-[500px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={i} 
                        style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className='h-[200px]'>

            </div>
          </div>
        </FullScreenDiv>
      </WebComponent>
      <MobileComponent>
        <FullScreenDiv>
          <div className='w-full full-grow flex flex-col bg-slate-900 px-[5%] text-white font-roboto'>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[40px] text-cyan-300 font-black mt-12'>Hobbies</p>

            {/* Traveling */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-8 text-cyan-300 mb-0'>Traveling:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Embracing the joy of discovery, I find fulfillment in exploring new places and creating unforgettable experiences, 
              whether solo or accompanied by family and friends.
            </p>

            {/* Bolivia */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              There's a unique charm in traversing the landscapes of my own country, a journey of rediscovering the beauty and 
              diversity sometimes hidden within it.
            </p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Bolivia:</p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesBolivia.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0,1])}</p>
                            <p className='text-xl font-black text-yellow-300'>{getCharacters(d.country, [2,3])}</p>
                            <p className='text-xl font-black text-green-400'>{getCharacters(d.country, [4,5,6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Países */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              I'm deeply grateful for the opportunities to explore beyond borders, enriching my life with new languages, 
              cultures, and perspectives from around the globe.
            </p>
            {/* Estados Unidos */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>United States:</p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesUsa.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0])}</p>
                            <p className='text-xl font-black text-white'>{getCharacters(d.country, [1])}</p>
                            <p className='text-xl font-black text-blue-500'>{getCharacters(d.country, [2])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Germany */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Germany:</p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesGer.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-black'>{getCharacters(d.country, [0, 1, 2])}</p>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [3, 4])}</p>
                            <p className='text-xl font-black text-yellow-500'>{getCharacters(d.country, [5, 6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Argentina and uruguay */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Argentina & Uruguay:</p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesArg.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-blue-500'>{d.country === 'Argentina' ? getCharacters(d.country, [0, 1, 2]):getCharacters(d.country, [0, 1])}</p>
                            <p className='text-xl font-black text-white'>{d.country === 'Argentina' ? getCharacters(d.country, [3, 4, 5]):getCharacters(d.country, [2, 3])}</p>
                            <p className='text-xl font-black text-blue-500'>{d.country === 'Argentina' ? getCharacters(d.country, [6, 7, 8]):getCharacters(d.country, [4, 5, 6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Argentina and uruguay */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 text-center'>Panama:</p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataViajesPanama.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0, 1])}</p>
                            <p className='text-xl font-black text-white'>{getCharacters(d.country, [2, 3])}</p>
                            <p className='text-xl font-black text-blue-500'>{getCharacters(d.country, [4, 5])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Roadtripping */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Road Tripping:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              Road tripping offers me an unparalleled sense of adventure and freedom, especially around my city, where the diverse 
              landscapes unfold in breathtaking beauty just a drive away.
            </p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <Slider {...settings}>
                {dataRoadtrips.map((d) => (
                  <div 
                    key={d.name} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={d.name} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                      <div className='absolute bottom-0 flex flex-col items-center justify-center bg-slate-400 py-1 px-6 bg-opacity-80 rounded-t-xl'>
                        <p className='text-white text-lg font-black'>
                          {d.name}
                        </p>
                        <div className='flex flex-row items-center'>
                          <p className='text-white text-lg font-black'>
                            {d.location},
                          </p>
                          <div className='flex flex-row items-center ml-1 space-x-[1px]'>
                            <p className='text-xl font-black text-red-500'>{getCharacters(d.country, [0,1])}</p>
                            <p className='text-xl font-black text-yellow-300'>{getCharacters(d.country, [2,3])}</p>
                            <p className='text-xl font-black text-green-400'>{getCharacters(d.country, [4,5,6])}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Family */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Family:</p>
            <div className='w-full flex flex-col items-center justify-center mt-4'>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
                Spending time with my close-knit family is a cherished hobby; we relish in shared activities and experiences, nurturing a 
                bond that inspires my dream of one day building my own family.
              </p>
              <div className='mt-4' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img src="https://portfoliostorage120849-dev.s3.amazonaws.com/public/familia.png" alt="familia" className='rounded-[30px]' />
              </div>
            </div>

            {/* Sports & Gym */}
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='font-bold text-[25px] mt-10 text-cyan-300 mb-0'>Sports & Gym:</p>
            <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[14px] font-light text-justify mt-4'>
              I thrive on the rush of adrenaline that extreme sports provide, always ensuring safety with proper protection. It's not just about the 
              thrill; it's about challenging my limits. Similarly, my gym routine is more than physical training; it's a testament to the mental 
              fortitude it cultivates. In each rep and run, I find lessons in discipline, perseverance, and the art of delayed gratification. 
              These practices are instrumental in shaping not just my physique but my character, reinforcing the values essential for personal 
              growth and integrity.
            </p>
            <div className='mt-3 mb-10 mx-3' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <Slider {...gymSettings}>
                {dataGym.map((d, i) => (
                  <div 
                    key={i} 
                    className='flex justify-center items-center h-[300px] w-full'
                  >
                    <div className='relative w-full h-full flex justify-center items-center'>
                      <img 
                        src={d.img} 
                        alt={i} 
                        style={{ maxHeight: '300px', maxWidth: '100%', objectFit: 'contain' }}
                        className='rounded-[30px]'
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </FullScreenDiv>
      </MobileComponent>
    </>
  )
}
