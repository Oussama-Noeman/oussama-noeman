"use client";
import {
  Product,
  ProductSearchFields,
  Sorting,
  useGetAllProductsQuery,
} from "@/graphql/generated/graphql";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductTable } from "./table";

const Index = () => {
  const params = useSearchParams();

  const page = params.get("page");
  const limit = params.get("limit");

  const { data, loading } = useGetAllProductsQuery({
    variables: {
      limit: limit ? +limit : 30, // Default to 30 if no limit is provided
      page: page ? +page : 1, // Default to page 1 if no page is provided
      sort: {
        field: ProductSearchFields.Title, // Sorting by product title
        order: Sorting.Asc, // Sort in ascending order
      },
      searchFields: {
        fields: [ProductSearchFields.Title], // Searching by product title
        q: "", // Empty search query by default
      },
    },
  });

  // Memoized calculation for products, length, and total pages
  const { allProducts, allProductsLength, totalPages } = useMemo(() => {
    return {
      allProducts: data?.getAllProduct.items,
      allProductsLength: data?.getAllProduct.length,
      totalPages: Math.ceil(+data?.getAllProduct?.length! / (+limit! || 30)),
    };
  }, [data?.getAllProduct.items, data?.getAllProduct.length, limit]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl font-bold">
        loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-4 px-2">
      <div className="text-2xl font-bold mb-4">
        <Button asChild>
          <Link href={"/"}>Go Back</Link>
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {allProducts && (
        <ProductTable
          products={allProducts as Product[]}
          currentPage={+page! || 1}
          totalPages={totalPages}
          totalItems={+allProductsLength!}
          limit={+limit! || 30}
        />
      )}
    </div>
  );
};

export default Index;
