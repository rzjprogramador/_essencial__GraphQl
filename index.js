const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Query {
        ola: String
        horaAtual: Date
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Bom dia !'
        },
        horaAtual() {
            return `${new Date}`
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`OK >>> EXECUTANDO EM ${url}`)
})