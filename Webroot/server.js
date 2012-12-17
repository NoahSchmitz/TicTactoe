var static_server = require('node-static');
var http = require('http');

var file = new(static_server.Server)('./webroot');

http.createServer(function (request, response)
{
	request.addListener('end', function ()
	{
		file.serve(request, response);
	});
}).Listen(9001);
