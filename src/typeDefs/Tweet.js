import gql from "graphql-tag";

const typeDefs = gql`
  type Tweet {
    id: ID!
    createdAt: Int!
    content: String!
    likes: [User]
    author: User!
    authorId: ID!
    comments: [Comment]
  }

  input TweetInput {
    authorId: String!
    content: String!
  }

  type Query {
    tweet(id: ID!): Tweet
    tweets: [Tweet]
  }

  type Mutation {
    createTweet(input: TweetInput!): Tweet
    updateTweet(id: ID!, input: TweetInput!): Tweet
    deleteTweet(id: ID!): Boolean
  }
`;
export default typeDefs;
