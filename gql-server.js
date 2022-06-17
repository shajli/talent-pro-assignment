const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { schema } = require('./utils/graphql/schema');

const { connectDatabase } = require('./utils/db-utils');

let db;

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    schema,
    context: async () => {
      if (!db) {
        try {
          const dbClient = await connectDatabase();
          db = dbClient.db('TalentProAssignment');
        } catch (error) {
          console.log(
            'Error while connecting with graphql context database',
            error
          );
        }
      }
      return { db };
    },
  });

  await server.start();
  server.applyMiddleware({ app, path: '/api/graphql' });

  app.listen(4000, () => {
    console.log(
      'Running GraphQL server at http://localhost:4000\nGo to http://localhost:4000/api/graphql'
    );
  });
}

startApolloServer();
