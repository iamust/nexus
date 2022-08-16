import { defineTask } from '@tossdev/click'
import { createServer } from 'vite'
// import page from '../page'

export const serveTask = defineTask({
  name: 'dev',
  about: 'Start dev server',
  handler(args, opts) {
    async function runTask() {
      const server = await createServer()
      await server.listen()
      server.printUrls()
    }

    runTask().catch(console.error)
  }
})

// // trash
// const config = buildOptions(opts)
// const bundler = new Bundler()
// bundler.serve()
// page.watch()
