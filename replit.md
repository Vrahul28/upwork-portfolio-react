# Portfolio Website - replit.md

## Overview

This is a modern, responsive portfolio website built as a full-stack web application showcasing a Flutter developer's professional work. The application features a React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and modern UI components for a polished user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store

### Database Schema
- **Projects**: Portfolio projects with metadata, technologies, and links
- **Experiences**: Work experience and professional history
- **Skills**: Technical skills with proficiency percentages and categories
- **Contacts**: Contact form submissions with timestamps
- **Chat Messages**: Interactive chat functionality for visitor engagement

## Key Components

### Core Sections
1. **Hero Section**: Landing area with call-to-action buttons
2. **About Section**: Personal introduction and statistics
3. **Resume Section**: Professional experience timeline
4. **Skills Section**: Animated skill bars categorized by technology type
5. **Projects Section**: Featured project showcase with filtering
6. **Contact Section**: Contact form with validation
7. **Chat Widget**: Interactive chat functionality

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Scroll Animations**: Intersection Observer-based animations
- **Form Validation**: Zod schema validation on both client and server
- **Error Handling**: Comprehensive error boundaries and user feedback
- **SEO Optimization**: Meta tags and semantic HTML structure

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with database
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages cache invalidation and updates
6. **UI Rendering**: Components re-render based on state changes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component suite
- **Styling**: Tailwind CSS with PostCSS processing
- **Animation**: Custom CSS animations with scroll-triggered effects
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date formatting

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle with PostgreSQL adapter
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation
- **Development**: tsx for TypeScript execution in development

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Server**: Hot module replacement and runtime error handling

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: esbuild bundles Node.js server code to `dist/index.js`
- **Asset Optimization**: Static assets served from build directory

### Production Environment
- **Deployment Target**: Replit autoscale deployment
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Port Configuration**: Server runs on port 5000 with external port 80
- **Process Management**: Single process serving both API and static files

### Development Workflow
- **Dev Server**: Concurrent frontend and backend development with HMR
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: Shared schema definitions between frontend and backend

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 27, 2025 - Removed Work Experience section completely from portfolio
- June 27, 2025 - Updated skills to include Flutter, Dart, GetX, Provider, SQLite in Mobile category
- June 27, 2025 - Updated Backend skills to include Firebase, REST APIs Integration, Spring Boot, AWS S3
- June 27, 2025 - Added contact information: email (vrahul2248@gmail.com), phone (+91 88727-14830), location (Chandigarh, India)
- June 27, 2025 - Updated social links with LinkedIn and GitHub profiles
- June 27, 2025 - Updated experience to 3+ years in About section
- June 27, 2025 - Replaced all projects with actual user projects: Google Gemini Clone, Tricity Associate, Car Rental App, Food Ordering App

## Changelog

Changelog:
- June 27, 2025. Initial setup and comprehensive updates