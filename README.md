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

### For Netlify
1. Verify all changes are committed.
2. On Netlify, link your repository.
3. Configure the build with:
   - Base Directory: project4
   - Build Command: npm run build
   - Publish Directory: dist
4. Set the following environment variables on Netlify:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY

### For GitHub Pages
1. Create a GitHub repository and push all your code (including the project4 folder) to the main branch.
2. Make sure the GitHub Actions workflow file at `.github/workflows/deploy.yml` is present. This workflow will:
   - Checkout the code,
   - Setup Node.js,
   - Install dependencies,
   - Build the project from the project4 folder,
   - Deploy the contents of `project4/dist` to the `gh-pages` branch.
3. In your repository, go to Settings > Pages. Set the source to the `gh-pages` branch.
4. Your website will be available at:  
   https://<your-github-username>.github.io/<repository-name>/

### Deploy via GitHub Pages
1. Go to your GitHub repository Settings > Pages.
2. Set the source to the "gh-pages" branch (not the main branch).  
   (This ensures only the built website in project4/dist is served, not the root README.)
3. The GitHub Actions workflow at `.github/workflows/deploy.yml` will build your project from `project4`
   and publish the contents of `project4/dist` to the "gh-pages" branch.
4. Visit https://<your-github-username>.github.io/<repository-name>/ to view your site.

### Deploy via GitHub from the terminal

If you're working in the current repository where the project4 folder resides, follow these steps from within the project4 directory:

1. Open your terminal inside /workspaces/webrep/project4 (this is your repository root).
2. If you haven't already, initialize your Git repository:
   git init
3. Add all files to the staging area and commit:
   git add .
   git commit -m "Initial commit"
4. Add the remote repository (using your repository's URL; here we use your new link):
   git remote add origin https://github.com/mo2000b/webrep.git
5. Pull any changes from the remote branch (to avoid non-fast-forward errors):
   git pull origin main --rebase
6. Push your changes to the main branch:
   git push -u origin main
7. Once pushed, the GitHub Actions workflow (defined at .github/workflows/deploy.yml) will build your project and deploy its output to the gh-pages branch.
8. In your GitHub repository, navigate to Settings > Pages and ensure the source is set to the gh-pages branch.
9. Your site will be available at:
   https://<your-github-username>.github.io/<repository-name>/