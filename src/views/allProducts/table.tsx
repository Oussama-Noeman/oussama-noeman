"use client";

import React from "react";
import { Product } from "@/graphql/generated/graphql";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface ProductTableProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  currentPage,
  totalPages,
  totalItems,
  limit,
}) => {
  const router = useRouter()
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id} className="cursor-pointer" onClick={()=>router.push(`/all-products/${product?._id}`)}>
              {/* <Link href={`/all-products/${product?._id}`} > */}
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>
                {new Date(product.createdAt).toLocaleDateString()}
              </TableCell>
            {/* </Link> */}
            </TableRow>
            
          ))}
        </TableBody>
      </Table>

      {/* Pagination and Info */}
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-sm">
          Showing {products.length} of {totalItems} items
        </p>
        <p className="text-sm">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
};
