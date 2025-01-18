import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Hero2 from '../components/Hero2'
import Card1 from '../components/Card1'
import Image from 'next/image'
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
       <Navbar />


       <div className="relative bg-neutral-100 h-screen flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/images/Homepage2Picture1.jpeg"
      alt="Luxury Homeware"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Box */}
  <div className="relative z-10 bg-white p-8 md:p-16 w-[570px] shadow-lg rounded-md ml-auto mr-8">
    <h1 className="text-2xl md:text-3xl font-extralight text-gray-900 mb-4">
      Luxury homeware for people who love timeless design quality
    </h1>
    <p className="text-gray-700 mb-6">
      Shop the new Spring 2022 collection today
    </p>
    <Link href='/SeeAllProducts'><button className="bg-[#F9F9F9] px-5 py-5 pl-8 pr-8 text-[#2A254B] mt-10">
              View collection
            </button></Link>
  </div>
</div>
<Hero2 />
<Card1 />

 {/* Hero Section 2 */}
              <div className='flex justify-center items-center space-x-4 md:p-10 p-6 md:flex-row flex-col'>
                           <div className='md:w-[650px] md:h-[500px] h-[281px] w-[342px] md:p-16 p-10 font-light bg-[#2A254B]'>
                             <h4 className='md:text-4xl text-2xl text-white font-thin'>It started with a small idea</h4>
                             <br />
                             <p className='md:text-xl text-sm text-white font-light'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                        <br />
                             <button className='md:mt-40 bg-[#F9F9F926;] px-5 py-5 md:pl-8 md:pr-8 pl-16 pr-20 font-extralight text-white'>View Collection</button>
                             </div>
            <br />
                           <div className='flex md:w-[650px] md:h-[500px] w-[330px] h-[259px]'>
                             <Image
                              src="/images/room2.jpeg"
                              alt="room2"
                              width={500}
                              height={100}
                              className='w-full h-full object-cover'
                             />
                           </div>
                        </div>



                        <section
      className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Homepage2Picture2.jpeg')",
      }}
    >
      <div className="p-8 rounded-lg max-w-lg text-center">
        <h2 className="text-3xl font-light text-white mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-white mb-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>
        <ul className="flex justify-center space-x-4 mb-6 text-white">
          <li className="flex items-center space-x-1">
            <span><FaRegCheckCircle className='w-6 h-6' /></span>
            <span>Exclusive offers</span>
          </li>
          <li className="flex items-center space-x-1">
            <span><FaRegCheckCircle className='w-6 h-6' /></span>
            <span>Free events</span>
          </li>
          <li className="flex items-center space-x-1">
            <span><FaRegCheckCircle className='w-6 h-6' /></span>
            <span>Large discounts</span>
          </li>
        </ul>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-md hover:bg-indigo-700">
            Sign up
          </button>
        </div>
      </div>
    </section>
<Footer />
    </div>
  )
}

export default page