'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ContactUs } from '@/graphql/generated/graphql';
import moment from 'moment';

interface ContactTableProps {
  contacts: ContactUs[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

export function ContactTable({
  contacts,
  currentPage,
  totalPages,
  totalItems,
  limit,
}: ContactTableProps) {
  const router = useRouter();
  const [page, setPage] = useState(currentPage);

  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
      router.push(`/all-contacts?page=${newPage}&limit=${limit}`);
    },
    [limit, router]
  );

  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? 'secondary' : 'outline'}
          className="mx-1"
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  }, [currentPage, handlePageChange, totalPages]);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Created At</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts?.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>
                {moment(contact.createdAt).format('MMM/DD/YYYY')}
              </TableCell>
              <TableCell>{contact.full_name}</TableCell>
              <TableCell>{contact.phone_number}</TableCell>
              <TableCell>{contact.subject}</TableCell>
              <TableCell>{contact.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          {page > 1 && (
            <Button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
          )}
          {renderPageNumbers()}
          {page < totalPages && (
            <Button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          )}
        </div>
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages} | Total items: {totalItems}
        </div>
      </div>
    </div>
  );
}
