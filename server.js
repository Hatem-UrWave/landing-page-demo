const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample data
const sampleData = {
  stats: [
    { label: 'Total Users', value: '12,543', icon: '👥' },
    { label: 'Active Projects', value: '342', icon: '🚀' },
    { label: 'Revenue', value: '$45,230', icon: '💰' },
    { label: 'Growth Rate', value: '24%', icon: '📈' }
  ],
  features: [
    {
      title: 'Fast Performance',
      description: 'Lightning-fast response times with optimized code',
      icon: '⚡'
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime',
      icon: '🔒'
    },
    {
      title: 'Easy Integration',
      description: 'Simple APIs that integrate with any platform',
      icon: '🔌'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it',
      icon: '💬'
    }
  ],
  recentActivity: [
    { action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { action: 'Project deployed successfully', time: '15 minutes ago', type: 'deploy' },
    { action: 'Payment received', time: '1 hour ago', type: 'payment' },
    { action: 'System backup completed', time: '3 hours ago', type: 'system' }
  ]
};

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Serve the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoint: http://localhost:${PORT}/api/data`);
});

