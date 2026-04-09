import {createServer} from 'http';
const PORT = process.env.PORT||8000;
const users = [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'Doe', age: 35}, {name: 'Smith', age: 28}, {name: 'Emily', age: 22}];
const server = createServer((req, res)=>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
})
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})