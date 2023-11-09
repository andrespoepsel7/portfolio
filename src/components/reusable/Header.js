import React, {useState, useEffect, useRef} from 'react'
import WebComponent from './WebComponent'
import MobileComponent from './MobileComponent'
import { useNavigate } from 'react-router-dom'
import {MdHome, MdMenu, MdInfo, MdDocumentScanner, MdDirectionsRun} from 'react-icons/md'
import {BsLightningChargeFill} from 'react-icons/bs'
import logoSquared from '../../assets/images/logoSquared.png'

export default function Header() {

  // Navigation
  const navigate = useNavigate()

  // States
  const [modal, setModal] = useState(false)

  // Modal
  const mobileMenuRef = useRef(null)

  useEffect(() => {

    let handler = (e)=>{
      if(!mobileMenuRef.current?.contains(e.target)){
        setModal(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <>
      <WebComponent>
        <div className='fixed flex flex-row top-0 left-0 w-full h-[100px] py-2 px-[5%] bg-slate-900 text-white shadow-md shadow-cyan-300 items-center justify-between'>
          <div onClick={()=>navigate('/')} className='flex flex-row items-center cursor-pointer'>
            <img src={logoSquared} alt="logo" width={45} className='rounded-md'/>
            <p className='font-bold font-roboto text-[30px] ml-1 text-cyan-300'>ortfolio!</p>
          </div>
          <div className='space-x-1 text-lg'>
            <button 
              className='rounded-md hover:text-slate-900 py-1 px-2 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-green-300'
              onClick={()=>navigate('/')}
            >
              Home
            </button>
            <button 
              className='rounded-md hover:text-slate-900 py-1 px-2 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-green-300'
              onClick={()=>navigate('/about')}
            >
              About
            </button>
            <button 
              className='rounded-md hover:text-slate-900 py-1 px-2 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-green-300'
              onClick={()=>navigate('/skills')}
            >
              Skills
            </button>
            <button 
              className='rounded-md hover:text-slate-900 py-1 px-2 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-green-300'
              onClick={()=>navigate('/projects')}
            >
              Projects
            </button>
            <button 
              className='rounded-md hover:text-slate-900 py-1 px-2 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-green-300'
              onClick={()=>navigate('/')}
            >
              Hobbies
            </button>
          </div>
        </div>
      </WebComponent>
      <MobileComponent>
        <div className='fixed flex flex-row top-0 left-0 w-full h-[70px] py-2 px-[2%] bg-slate-900 shadow-md shadow-cyan-300 items-center justify-between'>
          <div onClick={()=>navigate('/')} className='flex flex-row items-center cursor-pointer'>
            <img src={logoSquared} alt="logo" width={45} className='rounded-md'/>
            <p className='font-bold font-roboto text-[30px] ml-1 text-cyan-300'>ortfolio!</p>
          </div>
          {/* Menu, modal */}
          <div className='cursor-pointer font-mon text-c2' ref={mobileMenuRef}>
            <div 
              className='flex flex-row items-center justify-center text-white'
              onClick={()=>setModal(!modal)}
            >   

              <p className='font-bold text-[20px] mr-2 transition-all duration-100'>Menu</p>
              <MdMenu className='w-[40px] h-[40px] transition-all duration-100'/>
            </div>  

            {/* Modal */}
            {modal &&
              <div className='fixed top-[70px] right-0 bg-gradient-to-r from-cyan-300 to-green-300 text-white text-[18px] min-w-[200px] transition-transform duration-300 rounded-bl-2xl border-l-2 border-b-2 border-slate-900'>
                <div className='flex flex-col justify-start font-semibold'>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/')
                    }}
                  >
                    <MdHome className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Home</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/about')
                    }}
                  >
                    <MdInfo className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>About</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/skills')
                    }}
                  >
                    <BsLightningChargeFill className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Skills</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white'
                    onClick={()=>{
                        setModal(false)
                        navigate('/projects')
                    }}
                  >
                    <MdDocumentScanner className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Projects</p>
                  </div>
                  <div 
                    className='flex flex-row items-center justify-start py-2 px-4 cursor-pointer hover:bg-slate-900 hover:text-white rounded-bl-[12px]'
                    onClick={()=>{
                        setModal(false)
                        navigate('/')
                    }}
                  >
                    <MdDirectionsRun className='w-[18px] h-[18px]'/>
                    <p className='ml-2'>Hobbies</p>
                  </div>
                </div>
              </div>
            } 
          </div>
        </div>
      </MobileComponent>
    </>
  )
}
