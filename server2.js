import { createServer } from 'http';

const PORT = process.env.PORT || 8000;
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 },
    { name: 'Smith', age: 28 },
    { name: 'Emily', age: 22 },
];

const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

const sendText = (res, statusCode, body) => {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(body);
};

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        sendJson(res, 200, users);
        return;
    }

    sendText(res, 404, 'Not Found');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});