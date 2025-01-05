'use client';
import { ApolloProvider } from '@apollo/client';
import React, { Suspense } from 'react';

import { ApolloClient } from '@/lib';
interface IProps {
  children: React.ReactNode;
}

const Index: React.FC<IProps> = ({ children }) => {
  return (
    <ApolloProvider client={ApolloClient(null)}>
      <Suspense>{children}</Suspense>
    </ApolloProvider>
  );
};

export default Index;
