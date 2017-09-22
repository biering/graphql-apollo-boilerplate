import express            from 'express'
import path               from 'path'
import chalk              from 'chalk'
import bodyParser         from 'body-parser'
import { graphqlExpress,
  graphiqlExpress }       from 'apollo-server-express'

import schema             from './graphql/schema'
import config             from './config'

const app = express()

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

app.listen(config.PORT, () => {
  const log = console.log
  log('\n')
  log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`))
  log('\n')

  log(`${chalk.blue('/graphql')}  - endpoint for queries`)
  log(`${chalk.blue('/graphiql')} - endpoint for testing`)
  log('\n')
})

export default app
