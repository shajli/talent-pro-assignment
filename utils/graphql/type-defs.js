const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    users: [User]!
    user(_id: ID!): User
  }

  type Mutation {
    addUser(inputUser: InputUser!): String
    updateUser(_id: ID!, inputUser: InputUser!): String
    deleteUser(_id: ID!): String
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    videos: [Video]
  }

  input InputUser {
    firstName: String
    lastName: String
    email: String
    password: String
    videos: [InputVideo]
  }

  input InputVideo {
    title: String!
    category: String!
    tags: [String]
    url: String!
  }

  type Video {
    title: String!
    category: String!
    tags: [String]
    url: String!
  }
`;

module.exports = {
  typeDefs,
};
