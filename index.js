const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`

    type Produto {
        id: ID
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    type Query {
        produtoEmDestaque: Produto
    }
`

const resolvers = {

    Produto: {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return produto.preco * (1 - produto.desconto)
            }else{
                return produto.preco
            }
        }

    },
    Query: {
        
        produtoEmDestaque() {
            return {
                id: 2,
                nome: 'Entrega',
                preco: 9.99,
                desconto: 0.10
            }

        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`OK >>> DESAFIO PRODUTO == EM ${url}`)
})