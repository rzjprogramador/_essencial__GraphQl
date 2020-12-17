const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
    }
`

const resolvers = {
    Query: {
        ola() {
            return 'Bom dia !'
        },
        horaAtual() {
            return `${new Date}`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Reinaldo',
                email: 'reinaldo@email.com',
                idade: 43,
                salario: 50.000,
                vip: true
                
            }
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