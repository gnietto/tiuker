import fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = fastify({ logger: true });

server.get('/', function (reply: any) {
  reply.send({ hello: 'world' });
});

server.listen({ port: 3000 }, function (err: any) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
