import * as path from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import fp from 'fastify-plugin';

// workaround para disponibilizar __filename y __dirname en ESM
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const staticAssets = fp(async (fastify: any) => {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/public/'
  });
});

export default staticAssets;
