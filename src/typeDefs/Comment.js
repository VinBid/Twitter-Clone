import gql from "graphql-tag";

const typeDefs = gql`
  type Comment {
    id: ID!
    createdAt: Int!
    content: String!
    tweet: Tweet!
    tweetId: ID!
    author: User!
    authorId: ID!
  }

  input CommentInput {
    tweetId: String!
    authorId: String!
    content: String!
  }

  type Query {
    comment(id: ID!): Comment
    comments: [Comment]
  }

  type Mutation {
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Boolean
  }
`;
export default typeDefs;
