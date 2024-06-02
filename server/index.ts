import dbConnect from '@/config/db.config'
import { serveStatic } from 'hono/bun'
import { env } from 'server/src/config/env'
import app from 'server/src/server'

async function main() {
  app.get('*', serveStatic({ root: './dist/build' }))

  app.notFound((c) => {
    return c.json("Page not Found", 404)
  })

  app.onError((err, c) => {
    console.error(JSON.stringify(err))
    return c.json({ mesage: err.message }, 500)
  })

  Bun.serve({
    fetch: app.fetch,
    hostname: "0.0.0.0",
    port: env.PORT,
  })

  console.log(`App started at port -> ${env.PORT}`)
}


main().then(() => dbConnect().then(() => console.log('db connected'))).catch(err => console.log(err));
