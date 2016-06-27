'use strict';


module.exports = function( server ) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('<h1>Hello World</h1>');
    }
  });
};