// Fetch data from API and populate the page
async function loadData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        // Populate stats
        populateStats(data.stats);
        
        // Populate features
        populateFeatures(data.features);
        
        // Populate activity
        populateActivity(data.recentActivity);
        
        console.log('Data loaded successfully!');
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Failed to load data. Please try again.');
    }
}

function populateStats(stats) {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-icon">${stat.icon}</div>
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
        </div>
    `).join('');
}

function populateFeatures(features) {
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        </div>
    `).join('');
}

function populateActivity(activities) {
    const activityList = document.getElementById('activityList');
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <span class="activity-action">${activity.action}</span>
            <span class="activity-time">${activity.time}</span>
        </div>
    `).join('');
}

function showError(message) {
    const statsGrid = document.getElementById('statsGrid');
    statsGrid.innerHTML = `<div class="loading">${message}</div>`;
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

