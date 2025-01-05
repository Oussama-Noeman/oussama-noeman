# meritt.dev quiz project

## Instructions for Applicants

1. **Fork this Repository:** Start by forking this repository to your own GitHub account.
2. **Clone the Repository:** Clone your forked repository to your local machine using the following command:
   ```bash
   git clone <your-forked-repository-url>
   ```
3. **Install Dependencies**: Navigate to the project directory and install the required dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
4. **Start the Development Server**: Run the development server with one of the following commands:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Quiz Requirements

You are required to create the following three pages in the project:

1. **Contact Us Page**

   - Create a contact-us form you can find the needed schema through the GraphQL schema.
   - Use the `createContactus` Mutation provided within the GraphQL schema.
   - Ensure the form includes client-side validation for required fields.
   - Upon successful form submission, display a success message to the user.

2. **All Products Page**

   - Create a page that lists all products.
   - Use the `getAllProducts` Query provided within the GraphQL schema.

3. **Single Product Page**
   - Create a page to display details of a single product.
   - use the `getProduct` Query provided within the GraphQL schema.
   - This page should dynamically display product information based on a product ID passed as a route parameter.

## Example Reference

An example implementation of a GraphQL query is available in the `@/views/allContacts` directory:

- The `allContacts` view demonstrates how GraphQL queries work.
- Refer to this example to understand how to structure and execute GraphQL queries in the project.
- Use it as a guide for implementing your own pages that require GraphQL integration.

## UI Component Guidelines

- You are required to use either [shadcdn](https://ui.shadcn.com/) or [NextUI](https://nextui.org/) for building your UI components.
- Tailwind CSS must be used for styling throughout the project. Usage of any other CSS framework or library is **prohibited**.
- You are permitted to use AI tools like [v0.dev](https://v0.dev) or similar platforms to assist in building the UI.
- Focus on functionality rather than design; the visual appearance is not the primary concern for this task.
- This requirement is to assess your comfort with the specified stack and tools.

## API Details and GraphQL Setup

- The API URL you will be using is: [quiz-api.meritt.dev](https://quiz-api.meritt.dev)
- You can access the Apollo Playground to test your GraphQL operations and review the necessary schema documentation.

### Organizing GraphQL Operations

- All GraphQL operations must be placed in their respective folders:
  - Queries: `graphql/queries`
  - Mutations: `graphql/mutations`
- For reference, check the `graphql/queries/get-all-contacts.graphql` file.

## Generating Custom Hooks

- After adding your GraphQL operation files, run the following command to generate custom hooks:

  ```bash
  npm run gen
  # or
  yarn gen
  ```

  These hooks will allow you to easily integrate GraphQL operations into your components.

## Example Usage of Custom Hooks

- Refer to the `@/views/contacts` directory for an example of using custom hooks.
- This example demonstrates how to integrate generated hooks into your components effectively.

## Submission Instructions

- Once you've completed the task, create a pull request to the master branch within the original repository.
- Make sure to include your name in the branch name (e.g., `submission/your-name`).

## Resources

- **Next.js Documentation**
  [Next.js Official Documentation](https://nextjs.org/docs)

- **GraphQL Documentation**
  [GraphQL Official Documentation](https://graphql.org/learn/)

- **UI Component Libraries**

  - _Shadcn_
    [Shadcn Documentation](https://ui.shadcn.com/docs)
    [Next.js Integration with Shadcn](https://ui.shadcn.com/docs/installation/next)

  - _NextUI_
    [NextUI Documentation](https://nextui.org/docs)
    [Next.js Integration with NextUI](https://nextui.org/docs/guide/installation)

- **Tailwind CSS Documentation**
  [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)

## Apollo Playground Guide for GraphQL Operations

You can download the PDF guide from [here](https://app.tango.us/app/workflow/Apollo-Server--Querying-Products-with-Pagination-and-Search-e60fe54632aa446dba7edf9af9ffaddd)

Or visit [Guide](https://app.tango.us/app/workflow/Apollo-Server--Querying-Products-with-Pagination-and-Search-e60fe54632aa446dba7edf9af9ffaddd)
