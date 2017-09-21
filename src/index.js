import express            from 'express'
import path               from 'path'
import chalk              from 'chalk'
import bodyParser         from 'body-parser'
import { graphqlExpress,
  graphiqlExpress }       from 'apollo-server-express'

import schema             from './schema'

const app = express()
const port = 3000

app.use('/', express.static(path.resolve(__dirname, '/../public')))

app.get('/', (req, res) => {
  res.send({
    message: 'I am a server route and can also be hot reloaded!'
  })
})

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.listen(port, () => {
  const log = console.log
  log('\n')
  log(chalk.green(`Server started on http://localhost:${port}/`))
  log('\n')
  log(`${chalk.blue('/graphql')}  - endpoint for queries`)
  log(`${chalk.blue('/graphiql')} - endpoint for testing`)
  log('\n')
})

export default app
