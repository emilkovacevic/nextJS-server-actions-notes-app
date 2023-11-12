
# Next.js Notes App

A simple notes taking app built with Next.js, featuring the new NextJS server actions.

![Notes app](./notesapp.png)

Features
User Authentication: Secure user authentication system with login and registration functionality.
MongoDB Database: Utilizes MongoDB as the database provider.
Prisma Schema: Defines the data model for the application using Prisma schema.

Notes Management: Allows users to create, update, and manage notes with titles, descriptions, states, and types.

## Getting Started

1. create a .env file based on the `example.env` file located in the root directory.
2. Install the node dependencies with:

```bash
npm install

```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
