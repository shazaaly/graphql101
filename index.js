const {ApolloServer, gql} = require('apollo-server');
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers');

const server = new ApolloServer({typeDefs, resolvers})
server.listen(5000).then(({url})=>{
    console.log(`Api in running at ${url}`);
})