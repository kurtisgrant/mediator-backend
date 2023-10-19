import express from 'express';
import { getUsers } from './controllers/userController';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/users', (req, res) => {
    getUsers(req, res)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
