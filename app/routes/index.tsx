// app/routes/index.tsx
// `createRoute()` helps you create handlers
import { createRoute } from 'honox/factory'
import { Header } from '../components/header'

export default createRoute((c) => {
  return c.render(
    <>
      <Header />
      <div>
        <h1>Hello!</h1>
      </div>
    </>
  )
})