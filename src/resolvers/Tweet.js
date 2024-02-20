import Tweets from "../services/Tweets.js";
import Users from "../services/Users.js";

const resolvers = {
  Tweet: {
    author: ({ authorId }) => Users.find({ id: authorId }),
    likes: ({ id }) => Tweets.getLikes({ id }),
    comments: ({ id }) => Tweets.getComments({ id }),
  },
  Query: {
    tweet: (_, { id }) => Tweets.find({ id }),
    tweets: () => Tweets.findAll(),
  },
  Mutation: {
    createTweet: (_, { input }) => Tweets.create({ input }),
    updateTweet: (_, { id, input }) => Tweets.update({ id, input }),
    deleteTweet: (_, { id }) => Tweets.delete({ id }),
  },
};
export default resolvers;
