'use strict';


module.exports = function( server ) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index');
    }
  });

  server.route({
    method: 'GET',
    path: '/insurance-products',
    handler: function (request, reply) {
      reply.view('products');
    }
  });

  server.route({
    method: 'GET',
    path: '/service-center/insurance-company-information',
    handler: function (request, reply) {
      reply.view('service-center/insurance-company-information');
    }
  });

  server.route({
    method: 'GET',
    path: '/service-center/claims',
    handler: function (request, reply) {
      reply.view('service-center/claims');
    }
  });

  server.route({
    method: 'GET',
    path: '/service-center',
    handler: function (request, reply) {
      reply.view('service');
    }
  });

  server.route({
    method: 'GET',
    path: '/faq',
    handler: function (request, reply) {
      reply.view('faq');
    }
  });

  server.route({
    method: 'GET',
    path: '/forms/{name}',
    handler: function (request, reply) {
      switch( request.params  .name ) {
        case 'agent-of-record':
          reply.view('forms/index');
          break;
        default:
          reply.view('four-oh-four');
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/income-tax',
    handler: function (request, reply) {
      reply.view('income');
    }
  });

  server.route({
    method: 'GET',
    path: '/notary-services',
    handler: function (request, reply) {
      reply.view('notary');
    }
  });

  server.route({
    method: 'GET',
    path: '/about',
    handler: function (request, reply) {
      reply.view('about');
    }
  });

  server.route({
    method: 'GET',
    path: '/contact',
    handler: function (request, reply) {
      reply.view('contact');
    }
  });

  server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
      directory: {
        path: '../public/static/assets',
        defaultExtension: 'html'
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: '../public/css'
      }
    }
  });
  server.route({
    method: 'GET',
    path: '/{any}',
    handler: function( req, rep ) {
      rep.view('four-oh-four');
    }
  })
};