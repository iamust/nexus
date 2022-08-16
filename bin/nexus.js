#!/usr/bin/env node
const { click } = require('@tossdev/click')
const { buildTask } = require('../dist/tasks/build')
const { serveTask } = require('../dist/tasks/serve')

click
  .program('nexus')
  .addTask(buildTask)
  .addTask(serveTask)
  .execute()
