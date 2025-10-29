# Docker Deployment with Portainer

This guide explains how to deploy this project using Portainer on your Hetzner server.

## Prerequisites

- Portainer installed and running on your server
- Git repository set up (GitHub, GitLab, etc.)
- Docker installed on your server (usually comes with Portainer)

## Method 1: Using Docker Compose Stack (Easiest)

### Step 1: Prepare Your Repository

Make sure your code is pushed to GitHub/GitLab with:
- `Dockerfile`
- `docker-compose.yml`
- All project files

### Step 2: Deploy via Portainer Web UI

1. **Access Portainer**:
   - Open `http://your-server-ip:9000` (or your Portainer URL)
   - Login with your credentials

2. **Create New Stack**:
   - Click **Stacks** in the left sidebar
   - Click **Add stack** button
   - Name: `landing-page-demo`

3. **Choose Deployment Method**:

   **Option A: Web Editor** (Quick start)
   - Select **Web editor** tab
   - Copy the entire contents of `docker-compose.yml` from this repo
   - Paste into the editor
   - Click **Deploy the stack**

   **Option B: Git Repository** (Recommended for updates)
   - Select **Repository** tab
   - Repository URL: `https://github.com/YOUR_USERNAME/landing-page-demo.git`
   - Repository reference: `main` (or `master`)
   - Compose path: `docker-compose.yml`
   - Click **Deploy the stack**

4. **Access Your Application**:
   - After deployment, visit `http://your-server-ip:3000`
   - Your landing page should be live!

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

