import Main from './components/Main'
import CrimeDetection from './components/CrimeDetection/'
import VehicleTracking from './components/VehicleTracking/'
import Login from './components/Login/pages/loginpage.js'
import ErrorPage from "./components/404"
import React, { useState } from "react";
import preloader from './assets/preloader.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-screen ">

        <div className="">
          {loading ? (
            <div className="flex items-center justify-center bg-[white] w-full h-screen ">
              <img className="" src={preloader} alt="Loading..." />
            </div>
          ) : (
            <div>
              <BrowserRouter>
                <Routes>
                  <Route index element={<Main />} />
                  <Route path="/vehicleTracking" element={<VehicleTracking />} />
                  <Route path="/crimeDetection" element={<CrimeDetection />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </BrowserRouter>


            </div>
          )}
        </div>


      </div>
    </>

  );
}

export default App;