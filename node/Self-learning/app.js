const http = require('http') ; 

const server = http.createServer((req ,res ) => {
                    res.writeHead(200 , {'constent-Type' : 'application/json'}) ; 
                    res.end(JSON.stringify({
                        'reahn' : 'shaikh'
                    }))
                })
                .listen(3000 ,  console.log(`http://localhost:3000`)) ;

console.log(http);

// server.listen(3000 , ()=>{
//     console.log(`http://localhost:3000`);
// }) ; 

//https://nodejs.org/dist/latest-v18.x/docs/api/http.html#httpcreateserveroptions-requestlistener


// Dear Technical Department,

// I need a new mouse for my workstation. The current one is malfunctioning and affecting my productivity. I require a reliable, durable, and ergonomic mouse with at least two buttons and a scroll wheel. Wireless connectivity is preferred, but wired is also acceptable. Please provide the mouse as soon as possible.

// Thank you,

// [Your Name]





