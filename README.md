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

## Deployment on Hetzner Ubuntu 22

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
├── public/
│   ├── index.html    # Landing page
│   ├── styles.css    # Styles
│   └── app.js        # Frontend JavaScript
├── .gitignore
└── README.md
```

## License

MIT

