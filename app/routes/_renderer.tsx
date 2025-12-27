// app/routes/_renderer.tsx
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script , Link} from 'honox/server'

export default jsxRenderer(({ children }) => {
  return (
    <html lang='ja'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="icon" href="/favicon.ico" />
        <title>Dorimiamn's Portfolio</title>
        <Script src='/app/client.ts' />
        <Link href="/app/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})