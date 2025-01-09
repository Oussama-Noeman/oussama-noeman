import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ContactUsFilter: { input: any; output: any };
  DateTimeISO: { input: any; output: any };
  ObjectID: { input: any; output: any };
  PositiveInt: { input: any; output: any };
  ProductFilter: { input: any; output: any };
};

export type ContactUs = {
  __typename?: "ContactUs";
  _id: Scalars["ID"]["output"];
  body: Scalars["String"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  full_name: Scalars["String"]["output"];
  phone_number: Scalars["String"]["output"];
  subject: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ContactUsCreateInput = {
  body?: Scalars["String"]["input"];
  full_name?: Scalars["String"]["input"];
  phone_number?: Scalars["String"]["input"];
  subject?: Scalars["String"]["input"];
};

export type ContactUsEditInput = {
  _id: Scalars["ObjectID"]["input"];
  body?: Scalars["String"]["input"];
  full_name?: Scalars["String"]["input"];
  phone_number?: Scalars["String"]["input"];
  subject?: Scalars["String"]["input"];
};

/** Allowed fields for filtering ContactUs */
export enum ContactUsSearchFields {
  Body = "body",
  FullName = "full_name",
  PhoneNumber = "phone_number",
  Subject = "subject",
}

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createContactus: SingleContactUs;
  createProduct: SingleProduct;
  updateContactus: SingleContactUs;
  updateProduct: SingleProduct;
};

export type MutationCreateContactusArgs = {
  input: ContactUsCreateInput;
};

export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};

export type MutationUpdateContactusArgs = {
  input: ContactUsEditInput;
};

export type MutationUpdateProductArgs = {
  input: ProductEditInput;
};

export type PaginatedContactUs = {
  __typename?: "PaginatedContactUs";
  error?: Maybe<FieldError>;
  items?: Maybe<Array<ContactUs>>;
  length: Scalars["Float"]["output"];
};

export type PaginatedProduct = {
  __typename?: "PaginatedProduct";
  error?: Maybe<FieldError>;
  items?: Maybe<Array<Product>>;
  length: Scalars["Float"]["output"];
};

export type Product = {
  __typename?: "Product";
  _id: Scalars["ID"]["output"];
  createdAt: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  images: Array<Scalars["String"]["output"]>;
  quantity: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTimeISO"]["output"];
};

export type ProductCreateInput = {
  description?: Scalars["String"]["input"];
  images?: Array<Scalars["String"]["input"]>;
  quantity?: Scalars["Int"]["input"];
  title?: Scalars["String"]["input"];
};

export type ProductEditInput = {
  _id: Scalars["ObjectID"]["input"];
  description?: Scalars["String"]["input"];
  images?: Array<Scalars["String"]["input"]>;
  quantity?: Scalars["Int"]["input"];
  title?: Scalars["String"]["input"];
};

/** Allowed fields for filtering Product */
export enum ProductSearchFields {
  Description = "description",
  Images = "images",
  Quantity = "quantity",
  Title = "title",
}

export type Query = {
  __typename?: "Query";
  getAllContactus: PaginatedContactUs;
  getAllProduct: PaginatedProduct;
  getContactus: SingleContactUs;
  getProduct: SingleProduct;
};

export type QueryGetAllContactusArgs = {
  filters?: InputMaybe<Scalars["ContactUsFilter"]["input"]>;
  limit: Scalars["PositiveInt"]["input"];
  page: Scalars["PositiveInt"]["input"];
  searchFields: SearchContactUsFields;
  sort: SortContactUsArgs;
};

export type QueryGetAllProductArgs = {
  filters?: InputMaybe<Scalars["ProductFilter"]["input"]>;
  limit: Scalars["PositiveInt"]["input"];
  page: Scalars["PositiveInt"]["input"];
  searchFields: SearchProductFields;
  sort: SortProductArgs;
};

export type QueryGetContactusArgs = {
  _id: Scalars["ObjectID"]["input"];
};

export type QueryGetProductArgs = {
  _id: Scalars["ObjectID"]["input"];
};

export type SearchContactUsFields = {
  fields: Array<ContactUsSearchFields>;
  q: Scalars["String"]["input"];
};

export type SearchProductFields = {
  fields: Array<ProductSearchFields>;
  q: Scalars["String"]["input"];
};

export type SingleContactUs = {
  __typename?: "SingleContactUs";
  error?: Maybe<FieldError>;
  item?: Maybe<ContactUs>;
};

export type SingleProduct = {
  __typename?: "SingleProduct";
  error?: Maybe<FieldError>;
  item?: Maybe<Product>;
};

export type SortContactUsArgs = {
  field: ContactUsSearchFields;
  order?: Sorting;
};

export type SortProductArgs = {
  field: ProductSearchFields;
  order?: Sorting;
};

export enum Sorting {
  Asc = "ASC",
  Desc = "DESC",
}

export type GetAllContactusQueryVariables = Exact<{
  page: Scalars["PositiveInt"]["input"];
  limit: Scalars["PositiveInt"]["input"];
  searchFields: SearchContactUsFields;
  sort: SortContactUsArgs;
  filters?: InputMaybe<Scalars["ContactUsFilter"]["input"]>;
}>;

export type GetAllContactusQuery = {
  __typename?: "Query";
  getAllContactus: {
    __typename?: "PaginatedContactUs";
    length: number;
    error?: {
      __typename?: "FieldError";
      field: string;
      message: string;
    } | null;
    items?: Array<{
      __typename?: "ContactUs";
      _id: string;
      createdAt: any;
      full_name: string;
      phone_number: string;
      subject: string;
      body: string;
    }> | null;
  };
};

export const GetAllContactusDocument = gql`
  query GetAllContactus(
    $page: PositiveInt!
    $limit: PositiveInt!
    $searchFields: SearchContactUsFields!
    $sort: SortContactUsArgs!
    $filters: ContactUsFilter
  ) {
    getAllContactus(
      page: $page
      limit: $limit
      searchFields: $searchFields
      sort: $sort
      filters: $filters
    ) {
      error {
        field
        message
      }
      length
      items {
        _id
        createdAt
        full_name
        phone_number
        subject
        body
      }
    }
  }
`;

/**
 * __useGetAllContactusQuery__
 *
 * To run a query within a React component, call `useGetAllContactusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContactusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContactusQuery({
 *   variables: {
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      searchFields: // value for 'searchFields'
 *      sort: // value for 'sort'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetAllContactusQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetAllContactusQuery,
    GetAllContactusQueryVariables
  > &
    (
      | { variables: GetAllContactusQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    GetAllContactusQuery,
    GetAllContactusQueryVariables
  >(GetAllContactusDocument, options);
}
export function useGetAllContactusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAllContactusQuery,
    GetAllContactusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    GetAllContactusQuery,
    GetAllContactusQueryVariables
  >(GetAllContactusDocument, options);
}
export function useGetAllContactusSuspenseQuery(
  baseOptions?:
    | ApolloReactHooks.SkipToken
    | ApolloReactHooks.SuspenseQueryHookOptions<
        GetAllContactusQuery,
        GetAllContactusQueryVariables
      >
) {
  const options =
    baseOptions === ApolloReactHooks.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSuspenseQuery<
    GetAllContactusQuery,
    GetAllContactusQueryVariables
  >(GetAllContactusDocument, options);
}
export type GetAllContactusQueryHookResult = ReturnType<
  typeof useGetAllContactusQuery
>;
export type GetAllContactusLazyQueryHookResult = ReturnType<
  typeof useGetAllContactusLazyQuery
>;
export type GetAllContactusSuspenseQueryHookResult = ReturnType<
  typeof useGetAllContactusSuspenseQuery
>;
export type GetAllContactusQueryResult = Apollo.QueryResult<
  GetAllContactusQuery,
  GetAllContactusQueryVariables
>;
export type CreateContactusMutationVariables = Exact<{
  input: ContactUsCreateInput;
}>;

export type CreateContactusMutation = {
  __typename?: "Mutation";
  createContactus: {
    __typename?: "SingleContactUs";
    error?: {
      __typename?: "FieldError";
      field: string;
      message: string;
    } | null;
    item?: {
      __typename?: "ContactUs";
      _id: string;
      createdAt: any;
      full_name: string;
      phone_number: string;
      subject: string;
      body: string;
    } | null;
  };
};

export const CreateContactusDocument = gql`
  mutation CreateContactus($input: ContactUsCreateInput!) {
    createContactus(input: $input) {
      error {
        field
        message
      }
      item {
        _id
        createdAt
        full_name
        phone_number
        subject
        body
      }
    }
  }
`;

/**
 * __useCreateContactusMutation__
 *
 * To run a mutation within a React component, call `useCreateContactusMutation` and pass it any options that fit your needs.
 * When your component renders, `useCreateContactusMutation` returns a tuple that includes:
 * - A function to execute the mutation.
 * - An object with fields that correspond to the mutation result, such as `data`, `loading`, and `error`.
 *
 * @example
 * const [createContactusMutation, { data, loading, error }] = useCreateContactusMutation({
 *   variables: {
 *      input: {
 *        full_name: "Your Name",
 *        phone_number: "123456789",
 *        subject: "Your Subject",
 *        body: "Your message",
 *      },
 *   },
 * });
 */
export function useCreateContactusMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateContactusMutation,
    CreateContactusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<
    CreateContactusMutation,
    CreateContactusMutationVariables
  >(CreateContactusDocument, options);
}

// GraphQL Query for Getting All Products
export const GetAllProductsDocument = gql`
  query GetAllProducts(
    $page: PositiveInt!
    $limit: PositiveInt!
    $searchFields: SearchProductFields!
    $sort: SortProductArgs!
    $filters: ProductFilter
  ) {
    getAllProduct(
      page: $page
      limit: $limit
      searchFields: $searchFields
      sort: $sort
      filters: $filters
    ) {
      error {
        field
        message
      }
      length
      items {
        _id
        title
        description
        quantity
        images
        createdAt
        updatedAt
      }
    }
  }
`;

// Types for Get All Products Query Variables and Response
export type GetAllProductsQueryVariables = Exact<{
  page: Scalars["PositiveInt"]["input"];
  limit: Scalars["PositiveInt"]["input"];
  searchFields: SearchProductFields;
  sort: SortProductArgs;
  filters?: InputMaybe<Scalars["ProductFilter"]["input"]>;
}>;

export type GetAllProductsQuery = {
  __typename?: "Query";
  getAllProduct: {
    __typename?: "PaginatedProduct";
    length: number;
    error?: {
      __typename?: "FieldError";
      field: string;
      message: string;
    } | null;
    items?: Array<{
      __typename?: "Product";
      _id: string;
      title: string;
      description: string;
      quantity: number;
      images: Array<string>;
      createdAt: any;
      updatedAt: any;
    }> | null;
  };
};

// Apollo Hooks for Query
export function useGetAllProductsQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  > & { variables: GetAllProductsQueryVariables }
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >(GetAllProductsDocument, options);
}

export function useGetAllProductsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    GetAllProductsQuery,
    GetAllProductsQueryVariables
  >(GetAllProductsDocument, options);
}

// Type Aliases for Hook Results
export type GetAllProductsQueryHookResult = ReturnType<
  typeof useGetAllProductsQuery
>;
export type GetAllProductsLazyQueryHookResult = ReturnType<
  typeof useGetAllProductsLazyQuery
>;
export type GetAllProductsQueryResult = Apollo.QueryResult<
  GetAllProductsQuery,
  GetAllProductsQueryVariables
>;

// Query to get a single product by ID
export const GetProductByIdDocument = gql`
  query GetProductById($id: ObjectID!) {
    getProduct(_id: $id) {
      error {
        field
        message
      }
      item {
        _id
        title
        description
        quantity
        images
        createdAt
        updatedAt
      }
    }
  }
`;

// TypeScript types for the query and variables
export type GetProductByIdQuery = {
  __typename?: "Query";
  getProduct: {
    __typename?: "SingleProduct";
    error?: {
      __typename?: "FieldError";
      field: string;
      message: string;
    } | null;
    item?: {
      __typename?: "Product";
      _id: string;
      title: string;
      description: string;
      quantity: number;
      images: string[];
      createdAt: any;
      updatedAt: any;
    } | null;
  };
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars["ObjectID"]["input"];
}>;

// Hook for running the query
export function useGetProductByIdQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >(GetProductByIdDocument, options);
}

// Hook for lazy loading the query
export function useGetProductByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<
    GetProductByIdQuery,
    GetProductByIdQueryVariables
  >(GetProductByIdDocument, options);
}

// Result types
export type GetProductByIdQueryHookResult = ReturnType<
  typeof useGetProductByIdQuery
>;
export type GetProductByIdLazyQueryHookResult = ReturnType<
  typeof useGetProductByIdLazyQuery
>;
export type GetProductByIdQueryResult = Apollo.QueryResult<
  GetProductByIdQuery,
  GetProductByIdQueryVariables
>;
