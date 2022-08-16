import { defineTask } from '@tossdev/click'
import { createServer } from 'vite'
import { setup } from '../index'

export const serveTask = defineTask({
  name: 'dev',
  about: 'Start dev server',
  handler(args, opts) {
    async function runTask() {
      await setup()
      const server = await createServer()
      await server.listen()
      server.printUrls()
    }

    runTask().catch(console.error)
  }
})
