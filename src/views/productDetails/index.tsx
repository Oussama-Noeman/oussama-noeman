'use client'
import React, { useMemo } from "react";
import { useGetProductByIdQuery } from "@/graphql/generated/graphql";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  // Using the Apollo query hook to fetch the product data by productId
  const { data, loading, error } = useGetProductByIdQuery({
    variables: { id: productId },
  });

  // Memoizing the product details to prevent unnecessary re-renders
  const productDetails = useMemo(() => {
    if (data && data.getProduct?.item) {
      return data.getProduct.item;
    }
    return null;
  }, [data]);

  // If loading, show spinner
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl font-bold">
        loading...
      </div>
    );
  }

  // If error, display error message
  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error loading product details.</p>
      </div>
    );
  }

  // If no product details, return a message
  if (!productDetails) {
    return (
      <div className="text-center text-gray-500">
        <p>No product found.</p>
      </div>
    );
  }

  return (
    // <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    //   <div className="flex flex-col md:flex-row">
    //     {/* Product Images */}
    //     <div className="md:w-1/2">
    //       <img
    //         src={productDetails.images[0]}
    //         alt={productDetails.title}
    //         className="rounded-lg w-full h-auto object-cover"
    //       />
    //     </div>

    //     {/* Product Info */}
    //     <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
    //       <h2 className="text-3xl font-semibold text-gray-800">{productDetails.title}</h2>
    //       <p className="text-lg text-gray-600 mt-2">{productDetails.description}</p>

    //       <div className="mt-4">
    //         <span className="text-xl font-semibold text-gray-900">
    //           Quantity: {productDetails.quantity}
    //         </span>
    //       </div>

    //       <div className="mt-6">
    //         <Button  size="lg">
    //           Add to Cart
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-7xl mx-auto py-4 px-2">
    <div className="text-2xl font-bold mb-4">
      <Button asChild>
        <Link href={"/all-products?page=1&limit=4"}>Go Back</Link>
      </Button>
    </div>
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        {/* <CardTitle>{productDetails?.title}</CardTitle> */}
        </CardHeader>
      <CardContent>
        <div className="flex">
          <div className="w-1/2 ">
            <div className="w-full h-[25rem] relative">
             <Image src={productDetails?.images[0]} alt={productDetails?.title } fill objectFit="contain"/>
            </div>
          </div>
          <div className="w-1/2 space-y-4 ">
          <h1 className="text-2xl font-bold">{productDetails?.title}</h1>
          <p>{productDetails?.description}</p>
          <p className="">Quantity: <span className="font-bold text-lg text-blue-500">{productDetails?.quantity}</span></p>
          <Button>Add to cart</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  );
};

export default ProductDetails;
