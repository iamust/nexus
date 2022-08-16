import { defineTask } from '@tossdev/click'
import { Bundler } from '../index'
// import page from '../page'

export const serveTask = defineTask({
  name: 'dev',
  about: 'serve',
  handler(args, opts) {
    // const config = buildOptions(opts)
    const bundler = new Bundler()
    bundler.serve()
    // page.watch()
  }
})

// // trash
// // html-webpack-plugin
// src/config.ts
// src/index.ts
// src/tasks/build.ts
// src/tasks/serve.ts
// src/utils/index.ts
