import { Hono } from 'hono';
import type { Bindings, Variables } from './types/shared.ts';
import router from './router';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { customLogger } from './utils/custom-logger';
import { prettyJSON } from 'hono/pretty-json';
import { secureHeaders } from 'hono/secure-headers';
import { csrf } from 'hono/csrf';
import { env } from './config/env';

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>()

app.use(cors({
  origin: env.VITE_BASE_URL_FE,
  allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
  allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision', 'Origin', 'Content-Type', 'Content-Length', 'Accept-Encoding', 'X-CSRF-Token', 'Authorization'],
  maxAge: 600,
  credentials: true,
}))
app.use(secureHeaders({
  strictTransportSecurity: 'max-age=63072000; includeSubDomains; preload',
  xFrameOptions: 'DENY',
  xXssProtection: '1',
}))
app.use(csrf())

app.use(prettyJSON())
app.use(logger(customLogger))

app.route('', router)

export default app
