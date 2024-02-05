import Comments from "../services/Comments.js";
import Users from "../services/Users.js";
import Tweets from "../services/Tweets.js";

const resolvers = {
  Comment: {
    tweet: ({ tweetId }) => Tweets.find({ tweetId }),
    author: ({ authorId }) => Users.find({ authorId }),
  },
  Query: {
    comment: (_, { id }) => Comments.find({ id }),
    comments: () => Comments.findAll(),
  },
  Mutation: {
    createComment: (_, { input }) => Comments.create({ input }),
    updateComment: (_, { id, input }) => Comments.update({ id, input }),
    deleteComment: (_, { id }) => Comments.delete({ id }),
  },
};
export default resolvers;
