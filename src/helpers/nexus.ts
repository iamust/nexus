import { outputFileSync } from 'fs-extra'
import mustache from 'mustache'

const template = `import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageApp from '@tossdev/nexus/components/app'
import Page404 from '@tossdev/nexus/components/404'
import isFunction from 'lodash/isFunction'
import __App__ from './app'
import __404__ from './404'
{{#routes}}
import {{component}} from '{{{file}}}'
{{/routes}}

const NexusApp = isFunction(__App__) ? __App__ : PageApp
const Nexus404 = isFunction(__404__) ? __404__ : Page404

ReactDOM.render(<NexusApp Component={() => {
  return (
    <Router>
      <Switch>
        {{#routes}}
        {{=<% %>=}}
        <Route exact path="<%& pattern %>" component={<% component %>} />
        <%={{ }}=%>
        {{/routes}}
        <Route path="*" component={Nexus404} />
      </Switch>
    </Router>
  )
}} />, document.getElementById('nexus'))`

export type Route = {
  file: string
  depth: number
  pattern: string
  component: string
}

export function outputNexusJS(routes: Route[]) {
  const data = mustache.render(template, { routes })
  outputFileSync(`${process.cwd()}/.nexus/main.js`, data)
}
