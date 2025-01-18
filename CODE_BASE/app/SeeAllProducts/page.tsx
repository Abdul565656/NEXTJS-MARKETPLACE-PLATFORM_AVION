import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar />

        <section className="relative w-full h-64 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/stool2.jpeg')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start pl-6 md:pl-16">
        <h2 className="text-white text-lg md:text-2xl font-light tracking-wide">
          All products
        </h2>
      </div>
      </section>


      <section className="w-full px-4 md:px-12 py-4">
      {/* Filter and Sorting Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left - Filter Options */}
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <select className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
            </select>
          </div>

          <div className="relative">
            <select className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Product type</option>
              <option>Vases</option>
              <option>Appliances</option>
              <option>Accessories</option>
            </select>
          </div>

          <div className="relative">
            <select className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>

          <div className="relative">
            <select className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Brand</option>
              <option>Brand A</option>
              <option>Brand B</option>
              <option>Brand C</option>
            </select>
          </div>
        </div>

        {/* Right - Sorting */}
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <span className="text-gray-600">Sorting by:</span>
          <div className="relative">
            <select className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Date added</option>
              <option>Popularity</option>
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>
        </div>
      </div>
    </section>



    {/* Product Items */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-12 md:p-8">
                <div className="w-full h-auto">
                  <Image
                    src="/images/chair.jpeg"
                    height={600}
                    width={600}
                    alt="chair"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Dendy Chair</p>
                    <p className="text-sm">$250</p>
                  </div>
                </div>
    
                <div className="w-full h-auto">
                  <Image
                    src="/images/card2.jpeg"
                    height={250}
                    width={250}
                    alt="vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">Rustic VaseSet</p>
                    <p className="text-sm">$155</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/card3.jpeg"
                    height={600}
                    width={600}
                    alt="silky vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Silky Vase</p>
                    <p className="text-sm">$125</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/card4.jpeg"
                    height={600}
                    width={600}
                    alt="lamp"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Lucky Lamp</p>
                    <p className="text-sm">$399</p>
                  </div>
                </div>
              </div>



               {/* Product Items */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-12 md:p-8">
                <div className="w-full h-auto">
                  <Image
                    src="/images/chairs2.jpeg"
                    height={600}
                    width={600}
                    alt="chair"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Dendy Chair</p>
                    <p className="text-sm">$250</p>
                  </div>
                </div>
    
                <div className="w-full h-auto">
                  <Image
                    src="/images/lamp.jpeg"
                    height={250}
                    width={250}
                    alt="vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">Rustic VaseSet</p>
                    <p className="text-sm">$155</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/yellowstool.jpeg"
                    height={600}
                    width={600}
                    alt="silky vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Silky Vase</p>
                    <p className="text-sm">$125</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/poetry.jpeg"
                    height={600}
                    width={600}
                    alt="lamp"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Lucky Lamp</p>
                    <p className="text-sm">$399</p>
                  </div>
                </div>
              </div>



               {/* Product Items */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-12 md:p-8">
                <div className="w-full h-auto">
                  <Image
                    src="/images/chair.jpeg"
                    height={600}
                    width={600}
                    alt="chair"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Dendy Chair</p>
                    <p className="text-sm">$250</p>
                  </div>
                </div>
    
                <div className="w-full h-auto">
                  <Image
                    src="/images/card2.jpeg"
                    height={250}
                    width={250}
                    alt="vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">Rustic VaseSet</p>
                    <p className="text-sm">$155</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/card3.jpeg"
                    height={600}
                    width={600}
                    alt="silky vase"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Silky Vase</p>
                    <p className="text-sm">$125</p>
                  </div>
                </div>
                <div className="w-full h-auto">
                  <Image
                    src="/images/card4.jpeg"
                    height={600}
                    width={600}
                    alt="lamp"
                    className="w-full h-[70%] object-cover"
                  />
                  <div className="mt-4 text-[#2A254B]">
                    <p className="py-2 text-sm">The Lucky Lamp</p>
                    <p className="text-sm">$399</p>
                  </div>
                </div>
              </div>
          <Footer />
    </div>
  )
}

export default page