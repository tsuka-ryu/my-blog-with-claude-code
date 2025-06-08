# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack enabled (localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run screenshots` - Run screenshot capture tests locally
- `npm run playwright:install` - Install Playwright browsers

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

## Screenshot Automation

This project includes automated screenshot capture using Playwright for visual verification during PRs and code reviews.

### Features
- **Multi-viewport screenshots**: Desktop (1920x1080), Tablet (1024x768), Mobile (390x844)
- **Multi-browser support**: Chrome and Safari on desktop
- **Automatic PR comments**: Screenshots are automatically posted to PR comments
- **Manual execution**: Can be triggered manually via GitHub Actions

### Local Development
1. Install Playwright browsers: `npm run playwright:install`
2. Start dev server: `npm run dev`
3. Run screenshots: `npm run screenshots`

### GitHub Actions Workflow
- **Automatic trigger**: Runs on PR creation and updates
- **Manual trigger**: Can be run manually via GitHub Actions with optional PR number
- **Screenshot storage**: Saved as artifacts and embedded in PR comments

### Configuration
- **Playwright config**: `playwright.config.ts`
- **Test files**: `tests/screenshots/`
- **Workflow**: `.github/workflows/screenshot.yml`