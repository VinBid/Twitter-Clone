import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    name: String!
    likes: [Tweet]
    tweets: [Tweet]
    comments: [Comment]
  }

  input UserInput {
    email: String!
    password: String!
    name: String!
  }

  type Query {
    user(id: ID!): User
    users(ids: [ID]!): [User]
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): Boolean
  }
`;
export default typeDefs;
