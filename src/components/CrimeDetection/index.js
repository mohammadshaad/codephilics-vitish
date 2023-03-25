import React from 'react'
import Upload from './Upload/'
import Navbar from '../Navbar/'
import { Nav } from 'react-bootstrap'

function index() {
  return (
    <div>

      <Navbar />

      <div className='flex items-center justify-center flex-col gap-4'>

        <div className='text-3xl font-medium'>
          Track a vehicle by Registration Number
        </div>

        <form className="max-w-sm px-4 flex items-center justify-center gap-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by vehicle registration number"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>

          <button className='px-5 text-white rounded-lg py-3 bg-[#002042]'>
            Search
          </button>
        </form>

        <form className="max-w-sm px-4 flex items-center justify-center gap-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter Vehicle Type"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>

          <button className='px-5 text-white rounded-lg py-3 bg-[#002042]'>
            Search
          </button>
        </form>
      </div>

      <Upload />


    </div>
  )
}

export default index