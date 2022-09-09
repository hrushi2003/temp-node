const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("welcome to our homepage");
    }
    if(req.url ==="/about"){
        res.end("welcome to our history");
    }
    res.end(`
    <h1>Oops page not found</h1>
    <a href=#>back to home</a>
    `)
})
server.listen(5500)