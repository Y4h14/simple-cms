# Simple CMS

A simple Content Management System (CMS) built with NestJS, TypeScript, and Prisma ORM.

<img src="https://i.ibb.co/6cr4F3th/photo-2025-08-15-18-12-22.jpg" alt="photo-2025-08-15-18-12-22" border="3" width="300" hight="auto" />


## Features

- User authentication (JWT-based)
- Modular architecture (Auth, Users)
- RESTful API endpoints
- Prisma ORM integration
- Environment-based configuration
- Unit and e2e tests

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Y4h14/simple-cms.git
   cd simple-cms
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and update values (e.g., `DATABASE_URL`, `JWT_SECRET`).

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

### Running the Application

```bash
npm run start 
```

## Project Structure

```
├──package.json
├── package-lock.json
├── prisma
│   ├── migrations
│   └── schema.prisma
├── README.md
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth        # Auth Module
│   ├── content     # Content Module
│   ├── database    # Database Module
│   ├── discovery   # Discovery Module
│   ├── main.ts
│   └── users       # users Module
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── nest-cli.json
├── eslint.config.mjs
├── tsconfig.build.json
└── tsconfig.json
```

## Environment Variables

- `DATABASE_URL`: Database connection string
- `PORT`: Port number for the application
- `JWT_SECRET`: Secret key for JWT

## Main Endpoints

- `/auth/signin`: User login
- `/auth/register`: User signup
- `/discorery`: search through content
- `/content`: get all content
