const { makeExecutableSchema } = require('@graphql-tools/schema');
const { typeDefs } = require('./type-defs');
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = {
  schema,
};
