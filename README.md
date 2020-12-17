# \_essencial\_\_GraphQl

[] - Inicializada Query em type Query Ex: ola: String

[] - Processa em resolvers = dentro de Query
coloca um objeto e faz um metodo pra resolver a query inializada
Ex:
Query: { ola()} { return 'Bom dia'}

# Scalar types

(tipos Escalares)
https://graphql.org/learn/schema/#scalar-types
Int: A signed 32‐bit integer.
Float: A signed double-precision floating-point value.
String: A UTF‐8 character sequence.
Boolean: true or false.
( ID - Int - Float - String - Boolean )

## Criando um novo Scalar

Inicia em type Defs
scalar novoScalar
Processa/Usa em Query { query: novoScalar}
Resolve em resolvers queryMetodo() { return `new Scalar`}
..............................
..............................

## Dinamica Criando tipos e resolvendo :

em type cria o objeto NOVO TIPO com atributos e valores
em type Query -- faz a atribuiçao do NOVO TIPO guardando em um NOVO OBJETO ex: novoObj: SERÁ do novoTipoQuery
em const resolvers = {Query: { -- faz a função que resolvera os valores desse NOVO-OBJETO que guarda um novo tipo

ex:
novoObjeto(){--resolucao de valores dos atributos
podemos resolver retornando os valores dos atributos com dados ou vindos do banco de dados ou informações staticas
--}
..............................
..............................
