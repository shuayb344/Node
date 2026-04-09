import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req,res)=>{
  try {
    if(req.method === 'GET'){
      if(req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
      } else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
      } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
      }
  }else{
    throw new Error('Method Not Allowed');
  } }catch (error) {
    res.writeHead(500,{'Content-Type':'text/html'});
    res.write('<h1>Internal Server Error</h1>');
    res.end();
  }
});
server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})