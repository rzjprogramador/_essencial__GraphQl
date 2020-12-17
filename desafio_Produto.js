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
                desconto: 0.15
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

/*
===== DESAFIO PRODUTO =======
CRIAR :
Tipo Produto:
nome(obrigatorio)
preco(obrigatorio)
desconto
precoComDesconto (resolver) 
(Uma funcao que vai criar pra calcular o preço com desconto, 
    se o desconto tiver disponivel vai pegao preço tira o desconto e retorna o preco com desconto )

Consulta :
produtoEmDestaque 
<< Esta query vai retornar um produto que é exatamente o Tipo que foi criado Tipo Produto 
 e Este objeto vai retornar os atributos do tipo criado menos o preço com desconto 
 que sofrerá uma mutação e precisará ser resolvido em outro resolver  que vai pegar outrso 2 atributos apra fazer o calculo e retornar o precoComDesconto desejado >>

*/