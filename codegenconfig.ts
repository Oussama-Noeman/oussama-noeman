import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.NEXT_PUBLIC_API_ENDPOINT]: {},
    },
  ],
  documents: process.env.NEXT_PUBLIC_DOCUMENTS_PATH,
  generates: {
    [process.env.NEXT_PUBLIC_GENERATED_DOCUMENTS_PATH]: {
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactHooksImportFrom: '@apollo/client',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
