# webrep

## Project Structure

The public folder contains static assets that will be served at the root path:
- `/project4/public/wepacklogo.png` - Company logo used in the header (recommended size: 120x40px)

## Getting Started

1. Place your logo image file named `wepacklogo.png` in the `/project4/public` directory 
2. Run the development server

## Public Assets
Logo requirements:
- Filename: wepacklogo.png
- Location: /project4/public/
- Recommended size: 120x40px
- Format: PNG with transparency

## Troubleshooting Build Errors

- Check the build logs for specific error messages or warnings.
- Verify that all required dependencies (e.g., react, react-dom) are listed in package.json and installed.
- Ensure all necessary files are committed to the repository.
- Run "npm install" (or "yarn install") before deploying.
- If issues persist, provide the specific error details for a more targeted solution.

## Deployment Instructions

1. Verify all changes are committed.
2. On Netlify, link your repository.
3. Configure the build with:
   - Base Directory: project4
   - Build Command: npm run build
   - Publish Directory: dist
4. Set the following environment variables on Netlify:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY