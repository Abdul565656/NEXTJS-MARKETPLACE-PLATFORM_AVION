import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image';

const page = () => {
  return (
    <div>
         <Navbar />

                  <h1 className='md:p-12 md:ml-32 md:text-4xl p-8 text-2xl font-light'>Your shopping cart</h1>
                  <div>
  {/* Header Section */}
  <ul className="flex justify-between mx-4 md:mx-[182px] text-sm md:text-base">
    <li>Products</li>
    <li>Quantity</li>
    <li>Total</li>
  </ul>
  <hr className="border-t border-gray-200 mt-3 mx-4 md:mx-[182px]" />

  {/* Product 1 */}
  <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-[182px] mt-3 space-y-4 md:space-y-0">
    <div className="w-full md:w-[109px] h-[134px]">
      <Image
        src="/images/card3.jpeg"
        alt="card3"
        width={300}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full md:w-56 text-center md:text-left">
      <h4 className="font-semibold">Graystone vase</h4>
      <p className="text-sm md:text-base">
        A timeless ceramic vase with a tri color grey glaze.
      </p>
      <p className="font-medium mt-1">£85</p>
    </div>
    <p className="text-center md:text-left">1</p>
    <p className="text-center md:text-left">£85</p>
  </div>

  {/* Product 2 */}
  <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-[182px] mt-3 space-y-4 md:space-y-0">
    <div className="w-full md:w-[109px] h-[134px]">
      <Image
        src="/images/flower pot.jpeg"
        alt="flower pot"
        width={300}
        height={100}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full md:w-56 text-center md:text-left">
      <h4 className="font-semibold">Basic white vase</h4>
      <p className="text-sm md:text-base">
        Beautiful and simple this is one for the classics.
      </p>
      <p className="font-medium mt-1">£125</p>
    </div>
    <p className="text-center md:text-left">1</p>
    <p className="text-center md:text-left">£125</p>
  </div>

  <hr className="border-t border-gray-200 mt-3 mx-4 md:mx-[182px]" />

  {/* Subtotal Section */}
  <div className="flex justify-end mt-6 mx-4 md:mx-[182px]">
    <div className="text-right">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-end">
        <h4 className="text-lg md:text-xl font-thin">Subtotal</h4>
        <h4 className="text-xl md:text-2xl font-semibold">£210</h4>
      </div>
      <h5 className="mt-2 text-gray-500 text-sm md:text-base">
        Taxes and shipping are calculated at checkout
      </h5>
    </div>
  </div>
</div>

<div className='flex justify-end mr-[160px] p-4'>
<button className='bg-[#2A254B] pt-4 pb-4 pr-8 pl-8 text-white'>Go to checkout</button>
</div>



    </div>
  )
}

export default page