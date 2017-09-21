import query from './query.gql'
import { makeExecutableSchema } from 'graphql-tools'

//console.log(query)

const me = 5

const resolvers = {
  Query: {
    me () {
      return me
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs: query,
  resolvers
})

//console.log(schema)

export default schema
