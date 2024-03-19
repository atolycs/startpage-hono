import { Hono } from 'hono'
import { renderer } from './renderer'
import BaseLayout from './Layout/BaseLayout'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>

      <h1>welcome back</h1>
      <BaseLayout>
      </BaseLayout>

    </>
  , { title: "~/start"})
})

export default app
