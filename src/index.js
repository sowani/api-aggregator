const { GraphQLServer } = require ('graphql-yoga')
var dt = require ('./datefns')

const typeDefs = `
type Query {
  date: String!
  season: String!
}
`
const resolvers = {
  Query: {
    date: () => dt.getIsoDate(),
    season: (root) => "Testing",
  }
}

const server = new GraphQLServer ({
  typeDefs,
  resolvers,
})
server.start(() => console.log ('Server is running on http://localhost:4000'))
