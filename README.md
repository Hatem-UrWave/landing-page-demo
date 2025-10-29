# Landing Page Demo Project

A simple Node.js landing page project built for practicing deployment on Hetzner Ubuntu 22 Server.

## Features

- Modern, responsive landing page
- Express.js server
- RESTful API endpoint
- Sample data display (stats, features, activity)
- Clean, modern UI design

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Vanilla JavaScript** - Frontend interactivity
- **CSS3** - Modern styling

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd landing-page-demo
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

Start the development server:
```bash
npm start
```

Or use nodemon for auto-reload during development:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## Deployment Options

### Option 1: Docker Deployment with Portainer (Recommended)

Since you have Portainer on your server, this is the easiest way to deploy!

#### Method A: Using Docker Compose Stack in Portainer

1. **Access Portainer**:
   - Open your Portainer web interface (usually `http://your-server-ip:9000`)

2. **Create a Stack**:
   - Go to **Stacks** → **Add stack**
   - Name it: `landing-page-demo`
   - Select **Web editor** tab
   - Copy and paste the contents of `docker-compose.yml` from this repository
   - Click **Deploy the stack**

3. **Access your application**:
   - Visit `http://your-server-ip:3000`

#### Method B: Using Git Repository in Portainer

1. **Access Portainer**:
   - Go to **Stacks** → **Add stack**

2. **Configure Repository**:
   - Name: `landing-page-demo`
   - Select **Repository** tab
   - Repository URL: `https://github.com/YOUR_USERNAME/landing-page-demo.git`
   - Repository reference: `main` (or `master`)
   - Compose path: `docker-compose.yml`
   - Click **Deploy the stack**

3. **Access your application**:
   - Visit `http://your-server-ip:3000`

#### Method C: Building from Dockerfile in Portainer

1. **Clone repository on your server**:
   ```bash
   git clone <your-repo-url>
   cd landing-page-demo
   ```

2. **In Portainer**:
   - Go to **Containers** → **Add container**
   - Name: `landing-page-demo`
   - Image: Build from Dockerfile
   - Click **Build the image**
   - Build method: **Upload**
   - Upload the project folder (or use git repository option)
   - Dockerfile path: `Dockerfile`
   - Build options: Keep defaults
   - Click **Build the image**

3. **Configure Port**:
   - Port mappings: `3000:3000`
   - Restart policy: `Unless stopped`
   - Click **Deploy the container**

4. **Access your application**:
   - Visit `http://your-server-ip:3000`

### Option 2: Direct Docker Deployment (via SSH)

If you prefer command line:

```bash
# Clone repository
git clone <your-repo-url>
cd landing-page-demo

# Build and run with Docker Compose
docker-compose up -d

# Or build and run manually
docker build -t landing-page-demo .
docker run -d -p 3000:3000 --name landing-page-demo --restart unless-stopped landing-page-demo
```

### Option 3: PM2 Deployment (Traditional)

### 1. Connect to your server:
```bash
ssh root@your-server-ip
```

### 2. Update system packages:
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 4. Install PM2 (Process Manager):
```bash
sudo npm install -g pm2
```

### 5. Clone and setup project:
```bash
git clone <your-repo-url>
cd landing-page-demo
npm install --production
```

### 6. Start with PM2:
```bash
pm2 start server.js --name landing-page
pm2 save
pm2 startup
```

### 7. Configure firewall (if needed):
```bash
sudo ufw allow 3000/tcp
sudo ufw enable
```

### 8. Access your site:
Visit `http://your-server-ip:3000`

## API Endpoints

- `GET /` - Landing page
- `GET /api/data` - Returns JSON data (stats, features, activity)

## Project Structure

```
.
├── server.js          # Express server
├── package.json       # Dependencies
├── Dockerfile        # Docker image definition
├── docker-compose.yml # Docker Compose configuration
├── .dockerignore     # Docker ignore rules
├── public/
│   ├── index.html    # Landing page
│   ├── styles.css    # Styles
│   └── app.js        # Frontend JavaScript
├── .gitignore
└── README.md
```

## License

MIT

