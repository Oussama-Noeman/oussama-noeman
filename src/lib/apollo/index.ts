import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { toast } from 'sonner';
const client = (token: string | null | undefined) => {
  // Authentication link to attach Authorization header
  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
        origin: 'http://localhost:3000',
      },
    };
  });

  // Error handling link
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        toast.error(`GraphQL Error: ${message}`); // Show a toast for GraphQL errors
      });
    }

    if (networkError) {
      toast.error(`Network Error: ${networkError.message}`); // Show a toast for network errors
    }
  });
  // Retry link to retry failed requests
  const retryLink = new RetryLink();

  // HTTP link for making requests to the GraphQL API
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
  });

  // Combine all links (authLink, errorLink, httpLink)
  return new ApolloClient({
    link: from([authLink, retryLink, errorLink, httpLink]),
    cache: new InMemoryCache({
      addTypename: false,
    }),
  });
};

export default client;
