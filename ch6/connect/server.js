const connect = require('connect');

// 1- simple use connect 

// const app = connect()();
// app.use((req, res, next) => {
// res.end('Hello, world!');
// });
// app.listen(3000);


// 2- Combining middleware
function logger(req,res,next){
    console.log('%s %s',req.method,req.url);
    next();
}

function Hello(req,res){
    res.setHeader('content-Type','text/plan');
    res.end('hello world');
}

const app = connect().use(Hello).use(logger).listen(3000);
