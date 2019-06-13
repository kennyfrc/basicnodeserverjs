var http = require('http')

var server = http.createServer(function(req, res) {
  // Once a new request comes in...

  // You can get info using req

  var body = 'You requested ' + req.method + ' ' + req.url;

  // send the response status using writeHead

  res.writeHead(200, {
  	'Content-Head': body.length,
  	'Content-Type': 'text/html'
  })

  // add the response body using end
  res.end(body)
});

server.listen(3000)

// req and res come from the callback of createServer