import { ProductDetails } from "@/views";
import React from "react";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const productId = params.id;
  return <ProductDetails productId={productId} />;
}
