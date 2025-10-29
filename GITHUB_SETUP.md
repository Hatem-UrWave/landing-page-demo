# GitHub Setup Instructions

## Push to GitHub

### Step 1: Create a new repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `landing-page-demo` (or any name you prefer)
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Connect and push your local repository

After creating the repository, GitHub will show you commands. Use these commands:

```bash
cd C:\Users\hatem\landing-page-demo

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/landing-page-demo.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/landing-page-demo.git
git branch -M main
git push -u origin main
```

## That's it!

Your project is now on GitHub. You can share the repository URL with others or use it to deploy on your Hetzner server.

## Next Steps for Deployment

1. SSH into your Hetzner server
2. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/landing-page-demo.git
   cd landing-page-demo
   ```
3. Follow the deployment instructions in README.md

