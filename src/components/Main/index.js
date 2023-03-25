import React, { useState, useEffect } from "react";
import Login from '../Login/pages/loginpage'
import Styles from './style.module.css'
import { Outlet, Link, useLocation } from "react-router-dom";




function Index() {

  const [activeOption, setActiveOption] = useState(1);

  const location = useLocation();


  function handleClick(option) {
    setActiveOption(option);
  }

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveOption(1);
        break;
      case "/login":
        setActiveOption(2);
        break;

      default:
        setActiveOption(1);
    }
  }, [location]);

  return (
    <div className='flex items-center justify-center w-full'>

      <div className='w-1/2 flex items-start justify-center flex-col gap-6 ml-10'>
        <h1 className='font-semibold text-8xl'>
          AutoCopes
        </h1>

        <h3 className='font-light text-2xl'>
          Lorem Ipsum
        </h3>

        <a href='/login' onClick={handleClick} className='py-2 px-4 bg-[#002042] text-white rounded-md'>Login/Register</a>
      </div>

      <div className={`${Styles.landing_image} w-1/2 h-screen bg-cover rounded-l-full`}>
        {/* <img src={image} alt='' className='h-full bg-'/> */}
      </div>

    </div>
  )
}

export default Index