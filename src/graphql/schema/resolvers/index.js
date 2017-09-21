const counter = { count: 4 }

const resolvers = {
  Query: {
    counter () {
      return counter
    }
  }
}

export default resolvers
