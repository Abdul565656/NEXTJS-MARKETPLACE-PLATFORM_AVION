import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import MobileNavbar from '../components/MobileNavbar';
import Image from 'next/image';
import Card1 from '../components/Card1'
import Hero2 from '../components/Hero2'
import Club from '../components/Club'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
            {/* Top Header */}
        <nav className="flex justify-center items-center bg-[#2A254B] text-white p-2">
             <TbTruckDelivery />
             <h4 className="text-sm md:text-base">
                Free delivery on all orders over £50 with code easter checkout
             </h4>
        </nav>

        {/* Navbar */}
        <nav className='flex justify-between items-center p-4'>
            
    <div className='ml-12'>
        <h3 className='text-2xl'>Avion</h3>
    </div>
    <div className='hidden md:block'>
         <ul className="flex space-x-11 p-6 text-gray-600 text-sm ">
            <li className="hover:text-gray-800 cursor-pointer">Plant pots</li>
            <li className="hover:text-gray-800 cursor-pointer">Ceramics</li>
            <li className="hover:text-gray-800 cursor-pointer">Tables</li>
            <li className="hover:text-gray-800 cursor-pointer">Chairs</li>
            <li className="hover:text-gray-800 cursor-pointer">Tableware</li>
            <li className="hover:text-gray-800 cursor-pointer">Cutlery</li>
         </ul>
     </div>
    <div className='flex space-x-3 mr-12'>
    <FiSearch className="w-5 h-5 cursor-pointer" />
    <FiShoppingCart className="w-5 h-5 cursor-pointer" />
    <IoMdContact className="w-5 h-5 cursor-pointer" />
    <MobileNavbar />
    </div>
</nav>


<div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/2">
        <Image
            src="/images/product1.jpeg"
            alt="room"
            className="w-full md:h-[759px] h-full object-cover"
            height={300}
            width={300}
        />
    </div>

    <div className="w-full md:w-1/2 p-6 md:p-20">
        <h4 className="text-2xl md:text-4xl font-bold">The Dandy Chair</h4>
        <h5 className="text-xl md:text-2xl font-semibold">£250</h5>
         <br />
         <br />
         <br />
        <p className="mt-4 text-gray-700">
            A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
        </p>

        <ul className="list-disc mt-4 ml-4">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
        </ul>
         <br />
         <br />
        <h3>Dimensions</h3>
                <br />
                <div className='flex space-x-14 text-gray-600'>
                    <p>Height</p>
                    <p>Width</p>
                    <p>Depth</p>
                </div>
                <br />
                <div className='flex space-x-16 text-gray-600'>
                    <p>110cm</p>
                    <p>75cm</p>
                    <p>50cm</p>
                </div>
                <br />
                <br />
                <br />
                <div className='flex justify-between items-center'>
                    <h4 className='text-xl'>Amount</h4>
                    <p className='md:mr-44  tracking-tight bg-[#F9F9F9] p-3 '>- 1 +</p>
                    <button className='bg-[#2A254B] pt-4 pb-4 pr-8 pl-8 text-white'>Add to cart</button>
                </div>
            </div>
        </div>
        <Card1 />
        <Hero2 />
        <Club />
        <Footer />






    </div>
  )
}

export default page