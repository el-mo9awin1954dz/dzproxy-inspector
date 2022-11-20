// HTTP forward proxy server that can also proxy HTTPS requests
// using the CONNECT method

const args = process.argv.slice(2);

const HOST = args[0];
const PORT = args[1];

if(HOST === undefined || PORT == undefined) {


    console.log('\n\n','\x1b[31m',
     `
    ⠀⠀⢀⣀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢀⠀⠈⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠀⠁⠀⠘⠁⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠈⠀⠀⡇⠀⠀⠀⠀
⣀⣀⣀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠄⠀⠀⠸⢰⡏⠉⠳⣄⠰⠀⠀⢰⣷⠶⠛⣧⠀
⢻⡀⠈⠙⠲⡄⣿⠀⠀⠀⠀⠀⠀⠀⠠⠀⢸⠀⠀⠀⠈⠓⠒⠒⠛⠁⠀⠀⣿⠀
⠀⠻⣄⠀⠀⠙⣿⠀⠀⠀⠈⠁⠀⢠⠄⣰⠟⠀⢀⡔⢠⠀⠀⠀⠀⣠⠠⡄⠘⢧
⠀⠀⠈⠛⢦⣀⣿⠀⠀⢠⡆⠀⠀⠈⠀⣯⠀⠀⠈⠛⠛⠀⠠⢦⠄⠙⠛⠃⠀⢸
⠀⠀⠀⠀⠀⠉⣿⠀⠀⠀⢠⠀⠀⢠⠀⠹⣆⠀⠀⠀⠢⢤⠠⠞⠤⡠⠄⠀⢀⡾
⠀⠀⠀⠀⠀⢀⡿⠦⢤⣤⣤⣤⣤⣤⣤⣤⡼⣷⠶⠤⢤⣤⣤⡤⢤⡤⠶⠖⠋⠀
⠀⠀⠀⠀⠀⠸⣤⡴⠋⠸⣇⣠⠼⠁⠀⠀⠀⠹⣄⣠⠞⠀⢾⡀⣠⠃⠀⠀⠀⠀EL-MO9AWIN 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀
    `,'\x1b[0m');

    const str = `
        DZROOT BUG
        SCAN
        FIND
        EXPLOIT
                  DZ-HACKING-LAB                         `;
    console.log(str);




    console.log('\n\n','\x1b[31m','DZROOT CYBER-ROOM </>\nDZROOT dzproxyhack FOR HEADER SCAN ','\x1b[0m');
    console.log("USAGE : node dzproxy-inspector.js HOST PORT");
    process.exit(1);
}

var httpProxy = require('http-proxy'),
  url = require('url'),
  net = require('net'),
  http = require('http');

const authKey = process.env.PROXY_AUTH_KEY || undefined;
const proxyHeader = 'porxy-authorization';
var queryString = require('query-string');
var express = require('express');
var app = express();


process.on('uncaughtException', logError);

function truncate(str) {
  var maxLength = 64;
  return str.length >= maxLength ? str.substring(0, maxLength) + '...' : str;
}

function logRequest(req) {
  
  console.log(req.method + ' ' + truncate(req.url));
  function me(req, res) {
    const me = url.parse(req.url,true).query;
    const mex = url.parse(req.url,true).host;
    const mexx = url.parse(req.url,true).pathname;
    const mexxx = url.parse(req.url,true).search; 

    try {
    	console.log(me,mex,mexx,mexxx);
    } catch {
    }
  }
  for (var i in req.headers)
    console.log(' * ' + i + ': ' + truncate(req.headers[i]));

    try {
	console.log("\n\n ========================================================================================= \n\n %s \n\n ========================================================================================= \n\n",req.headers)
    } catch {

    }
  var q = url.parse(req.url, true);
  try {
	console.log("\n\n ========================================================================================= \n\n");
  	console.log(q.host); //returns 'localhost:8080'
  	console.log(q.pathname); //returns '/index.php'
  	console.log(q.search); //returns '?type=page&action=update&id=5221'
 
  	var qdata = q.query; // returns an object: { type: page, action: 'update',id='5221' }
  	console.log(qdata.type); //returns 'page'
  	console.log(qdata.action); //returns 'update'
  	console.log(qdata.id); //returns '5221'
        console.log("\n\n ========================================================================================= \n\n");

  } 
  catch (e) {
    console.log(e);
  }

}

function logError(e) {
  console.warn('*** ' + e);
}

// this proxy will handle regular HTTP requests
var regularProxy = new httpProxy.createProxyServer();

// standard HTTP server that will pass requests
// to the proxy
var server = http.createServer(function(req, res) {
  //   console.log('via normal http');
  logRequest(req);
  if (!req.headers[proxyHeader] || req.headers[proxyHeader] !== auth) {
    res.writeHead(401);
    res.end();
    return;
  }
  delete req.headers[proxyHeader];
       uri = url.parse(req.url);
       regularProxy.proxyRequest(req, res, {
         host: uri.hostname,
         port: uri.port || PORT
       });
  regularProxy.web(req, res, { target: 'http://' + req.headers.host });
});

// when a CONNECT request comes in, the 'connect'
// event is emitted

try {
server.on('connect', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('get', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
       socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
       socket.end();
       socket.destroy();
    return;
  }
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('post', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('put', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('head', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('options', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('patch', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('delete', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('set', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
server.on('show', function(req, socket, head) {
  //   console.log('via connect');
  logRequest(req);
  console.log(req);
  if (
    authKey &&
    (!req.headers[proxyHeader] || req.headers[proxyHeader] !== authKey)
  ) {
    socket.write('HTTP/1.1 401 UNAUTHORIZED\r\n\r\n');
    socket.end();
    socket.destroy();
    return;
  }  
  // URL is in the form 'hostname:port'
  var parts = req.url.split(':', 2);
  // open a TCP connection to the remote host
  var conn = net.connect(
    parts[1],
    parts[0],
    function() {
      // respond to the client that the connection was made
      socket.write('HTTP/1.1 200 OK\r\n\r\n');
      // create a tunnel between the two hosts
      socket.pipe(conn);
      conn.pipe(socket);
    }
  );
});
}
catch {


}
const port = process.env.PORT || PORT;
server.listen(port);
console.log("SERVER START ON %s:%s    \n\n BY DZROOT EL-MO9AWIN DZ-HACKING-LAB\n\n",HOST,PORT);
