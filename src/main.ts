import { fastify, FastifyInstance } from 'fastify';

const server: FastifyInstance = fastify({ logger: true });

server.get('/', function (request: any, reply: any) {
  reply.send('Primer mensaje');
});

server.listen({ port: 3002 }, function (err: any) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
