// app/routes/index.tsx
// `createRoute()` helps you create handlers
import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hello!</h1>
    </div>
  )
})