"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetProductByIdQuery } from "@/graphql/generated/graphql";
import { Badge } from "@/components/ui/badge";

interface ProductDetailsProps {
  productId: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ productId }) => {
  const { data, loading, error } = useGetProductByIdQuery({
    // variables: { _id: productId }, // Use the correct key here
  });

  const product = useMemo(() => data?.getProduct.item, [data]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Skeleton className="w-1/2 h-10 mb-6" />
        <Skeleton className="w-full h-40 mb-4" />
        <Skeleton className="w-1/2 h-6" />
        <Skeleton className="w-full h-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-bold text-red-600">
        Failed to load product details: {error.message}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-xl font-bold text-gray-500">
        Product not found.
      </div>
    );
  }

  const { title, description, quantity, images } = product;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="mb-4">
            <Badge>Quantity: {quantity}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg border border-gray-200 shadow"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
