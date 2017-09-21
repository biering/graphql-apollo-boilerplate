import express            from 'express'
import path               from 'path'
import bodyParser         from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema             from './domain/schema'

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
  console.log('Hello World listening on port ' + port)
})

export default app
