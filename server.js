const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let users = [];

app.post('/track', (req, res) => {
    const { userId, socialTime, callTime } = req.body;
    users.push({ userId, socialTime, callTime });
    res.send({ status: 'success' });
});

app.get('/suggestions/:userId', (req, res) => {
    const userId = req.params.userId;
    const user = users.find(u => u.userId === userId);
    if (!user) return res.status(404).send({ status: 'user not found' });

    const suggestions = users
        .filter(u => u.userId !== userId)
        .sort((a, b) => {
            const aDiff = Math.abs(a.socialTime - user.socialTime) + Math.abs(a.callTime - user.callTime);
            const bDiff = Math.abs(b.socialTime - user.socialTime) + Math.abs(b.callTime - user.callTime);
            return aDiff - bDiff;
        })
        .map(u => `User ${u.userId}: Similar activity pattern`);
    
    res.send({ suggestions });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
