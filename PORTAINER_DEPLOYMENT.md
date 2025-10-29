# Docker Deployment with Portainer

This guide explains how to deploy this project using Portainer on your server.

## 🚀 Quick Start (5 Minutes)

**⚠️ Important:** You must use the **Git Repository** method because Portainer needs access to your Dockerfile and project files to build the image.

**Fastest way to deploy:**

1. **Push your code to GitHub/GitLab** (if not already done)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Open Portainer UI (`http://your-server-ip:9000`)
3. Go to **Stacks** → **Add stack**
4. Name it: `landing-page-demo`
5. **Select Repository tab** (NOT Web editor)
6. Fill in:
   - Repository URL: `https://github.com/YOUR_USERNAME/landing-page-demo.git`
   - Reference: `main` (or `master` if that's your branch)
   - Compose path: `docker-compose.yml`
7. Click **Deploy the stack**
8. Access your app at `http://your-server-ip:3000`

Done! ✅

**Note:** If you see "Dockerfile not found" error, it means you're using the Web editor method. You MUST use the Repository method instead.

---

## Prerequisites

- Portainer installed and running on your server
- Git repository set up (GitHub, GitLab, etc.) - Optional, only needed for Git-based deployment
- Docker installed on your server (usually comes with Portainer)

## Method 1: Using Docker Compose Stack with Git Repository (Recommended)

### Step 1: Prepare Your Repository

Make sure your code is pushed to GitHub/GitLab with:
- `Dockerfile`
- `docker-compose.yml`
- All project files (`server.js`, `package.json`, `public/` folder, etc.)

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy via Portainer Web UI

1. **Access Portainer**:
   - Open `http://your-server-ip:9000` (or your Portainer URL)
   - Login with your credentials

2. **Create New Stack**:
   - Click **Stacks** in the left sidebar
   - Click **Add stack** button
   - Name: `landing-page-demo`

3. **Deploy from Git Repository** (Required - Web editor won't work):
   - Select **Repository** tab (NOT Web editor)
   - Repository URL: `https://github.com/YOUR_USERNAME/landing-page-demo.git`
   - Repository reference: `main` (or `master`)
   - Compose path: `docker-compose.yml`
   - Click **Deploy the stack**

4. **Access Your Application**:
   - After deployment completes (build may take 2-5 minutes), visit `http://your-server-ip:3000`
   - Your landing page should be live!

**Why Git Repository method?**
- Portainer needs access to your `Dockerfile` and all project files to build the image
- The Web editor only accepts the compose file, not the actual project files
- Using Git ensures Portainer can clone and build everything correctly

## Method 2: Building from Dockerfile

### Step 1: Clone Repository on Server

```bash
ssh root@your-server-ip
git clone https://github.com/YOUR_USERNAME/landing-page-demo.git
cd landing-page-demo
```

### Step 2: Build in Portainer

1. **Access Portainer** → **Images** → **Build a new image**

2. **Configure Build**:
   - Image name: `landing-page-demo:latest`
   - Build method: **Upload**
   - Upload the project folder (zip it first) OR use git repository
   - Dockerfile path: `Dockerfile`
   - Click **Build the image**

3. **Create Container**:
   - After build completes, go to **Containers** → **Add container**
   - Name: `landing-page-demo`
   - Image: Select `landing-page-demo:latest`
   - Port mappings: `3000:3000`
   - Restart policy: `Unless stopped`
   - Click **Deploy the container**

## Method 3: Using Portainer Stacks with Git (Auto-updates)

This method allows easy updates by pulling from Git:

1. **In Portainer** → **Stacks** → **Add stack**

2. **Configure**:
   - Name: `landing-page-demo`
   - Select **Repository** tab
   - Repository URL: `https://github.com/YOUR_USERNAME/landing-page-demo.git`
   - Repository reference: `main`
   - Compose path: `docker-compose.yml`
   - Enable **Auto-update** if you want automatic pulls
   - Click **Deploy the stack**

## Updating Your Application

### If using Git Repository method:
Simply push changes to your repository and click **Editor** → **Update the stack** in Portainer

### If using Web Editor method:
Edit the stack, update the compose file, and redeploy

## Troubleshooting

### ❌ Error: "failed to read dockerfile: open Dockerfile: no such file or directory"

**Cause:** You're using the Web editor method, which doesn't have access to your project files.

**Solution:** 
1. Delete the failed stack
2. Use the **Repository** method instead (see Method 1 above)
3. Make sure your code is pushed to GitHub/GitLab
4. Use the Repository tab in Portainer, not the Web editor

### Check Container Logs:
- In Portainer: **Containers** → Select your container → **Logs**

### Check Container Status:
- **Containers** → Verify status is "Running"

### Port Conflicts:
- If port 3000 is already in use, change it in `docker-compose.yml`:
  ```yaml
  ports:
    - "3001:3000"  # Change 3001 to any available port
  ```

### View Container Details:
- **Containers** → Click container name → **Inspect** tab

### Build Taking Too Long:
- First build may take 5-10 minutes (downloading base image, installing dependencies)
- Check the stack logs in Portainer to see build progress
- If it fails, check the logs for specific error messages

## Portainer Features You Can Use

- **Container Logs**: View real-time application logs
- **Container Stats**: Monitor CPU, memory usage
- **Container Console**: Access container shell
- **Restart Policy**: Automatic restart on failure
- **Health Checks**: Monitor container health
- **Port Mappings**: Easy port configuration

## Security Notes

- The Dockerfile runs as non-root user for security
- Consider using a reverse proxy (Nginx) in front of your container
- Use environment variables for sensitive data
- Keep your Docker images updated

## Next Steps

- Set up Nginx reverse proxy for domain name
- Add SSL certificate (Let's Encrypt)
- Set up monitoring and alerts
- Configure backup strategy

