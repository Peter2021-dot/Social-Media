document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Social Activity Tracker</h1>
        <p>Track your social app usage and get connected with others!</p>
        <button id="login">Login</button>
        <div id="dashboard" style="display:none;">
            <h2>Your Activity</h2>
            <p>Time on social apps: <span id="social-time">0</span> minutes</p>
            <p>Time on calls: <span id="call-time">0</span> minutes</p>
            <h2>Suggested Connections</h2>
            <ul id="suggestions"></ul>
        </div>
    `;

    const loginButton = document.getElementById('login');
    loginButton.addEventListener('click', () => {
        // Mock login functionality
        loginButton.style.display = 'none';
        const dashboard = document.getElementById('dashboard');
        dashboard.style.display = 'block';

        // Mock fetching user data
        const socialTime = Math.floor(Math.random() * 100);
        const callTime = Math.floor(Math.random() * 100);
        document.getElementById('social-time').innerText = socialTime;
        document.getElementById('call-time').innerText = callTime;

        // Mock fetching suggestions
        const suggestions = [
            'User 1: Similar activity pattern',
            'User 2: Similar activity pattern'
        ];
        const suggestionsList = document.getElementById('suggestions');
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.innerText = suggestion;
            suggestionsList.appendChild(li);
        });
    });
});
