# On-Prem to AWS Migration Demo

This project demonstrates migrating a simple 3-tier application (Frontend + Backend + Database) from an on-prem setup to AWS.

## Project Structure
- **frontend/** → Static HTML website
- **backend/** → Node.js Express API
- **database/** → MySQL schema and seed data

## AWS Migration Target
- Frontend → Amazon S3 + CloudFront
- Backend → Amazon EC2 / Elastic Beanstalk
- Database → Amazon RDS (MySQL)

## Running Locally
```bash
cd backend
npm install
npm start
