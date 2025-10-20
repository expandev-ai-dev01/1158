# Cadastro de Bancos - Backend API

## Description
Backend API for Brazilian Banking System Registration. This system allows registration, consultation, editing, and deletion of banks with basic data (bank code and bank name).

## Features
- Bank Registration
- Bank Consultation
- Bank Editing
- Bank Deletion
- Bank Listing
- Data Validation

## Technology Stack
- Node.js
- TypeScript
- Express.js
- MS SQL Server
- Zod (validation)

## Prerequisites
- Node.js 18+
- MS SQL Server
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your database credentials

5. Run database migrations (SQL scripts in `database/` folder)

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Check API health status

### Banks (v1)
All endpoints are prefixed with `/api/v1/internal`

- `GET /bank` - List all banks
- `POST /bank` - Create new bank
- `GET /bank/:id` - Get bank by ID
- `PUT /bank/:id` - Update bank
- `DELETE /bank/:id` - Delete bank

## Project Structure

```
src/
├── api/              # API controllers
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── instances/        # Service instances
└── server.ts         # Application entry point
```

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
npm run lint:fix
```

## License
ISC