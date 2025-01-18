"use client"
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/router";
import { CiStar } from "react-icons/ci";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch product data based on the slug
  const product = await client.fetch(`
    *[ _type == "product" && slug.current == $slug][0]{
      name,
      price,
      description,
      discountPercentage,
      priceWithoutDiscount,
      rating,
      image
    }
  `, { slug });

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={urlFor(product.image).url()}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-6">Price: ${product.price}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          <p className="text-gray-700 mb-8">Discount Percentage: {product.discountPercentage}%</p>
          <p className="text-gray-700 mb-8">Price Without Discount: ${product.priceWihoutDiscount}</p>
          <p className="text-gray-700 mb-8">
            <span className="flex items-center text-2xl font-bold">
              Rating: 
              <CiStar className="text-yellow-500" />
              <CiStar className="text-yellow-500" />
              <CiStar className="text-yellow-500" />
              <CiStar className="text-yellow-500" />
              <CiStar />
              <CiStar />
              <CiStar />
              
            </span>
          </p>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Add to cart handler
const handleAddToCart = (product: any) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} has been added to your cart!`);
};

export default ProductDetails;