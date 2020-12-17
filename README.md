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

## Criando um novo Scalar
Inicia em type Defs
scalar novoScalar
Processa/Usa em Query { query: novoScalar}
Resolve em resolvers queryMetodo() { return `new Scalar`}
