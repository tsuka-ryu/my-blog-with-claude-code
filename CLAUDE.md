# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack enabled (localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 15 blog application using the App Router architecture with TypeScript and Tailwind CSS v4.

### Key Structure
- **App Router**: Uses `src/app/` directory structure with `layout.tsx` and `page.tsx`
- **TypeScript**: Strict mode enabled with path mapping (`@/*` → `./src/*`)
- **Styling**: Tailwind CSS v4 with Geist fonts (sans and mono variants)
- **Linting**: ESLint with Next.js and TypeScript rules

### Important Files
- `src/app/layout.tsx` - Root layout with font configuration and metadata
- `src/app/page.tsx` - Homepage component
- `src/app/globals.css` - Global styles and Tailwind imports
- `next.config.ts` - Next.js configuration (currently minimal)

The project follows Next.js 15 conventions with React 19 and uses Turbopack for fast development builds.