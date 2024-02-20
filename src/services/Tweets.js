import prisma from "../prisma/client.js";

export default class Tweets {
  // CREATE
  static async create({ input }) {
    const { authorId, content } = input;
    const tweet = await prisma.tweet.create({
      data: {
        authorId,
        content,
      },
    });
    return tweet;
  }

  // READ
  static async find({ id }) {
    return prisma.tweet.findUnique({
      where: {
        id,
      },
    });
  }

  static async findAll() {
    return prisma.tweet.findMany();
  }

  // UDPATE
  static async update({ id, input }) {
    try {
      const tweet = await prisma.tweet.update({
        where: {
          id,
        },
        data: input,
      });
      return tweet;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete({ id }) {
    try {
      await prisma.tweet.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  // OTHER
  static async getLikes({ id }) {
    return prisma.user.findMany({
      where: {
        likes: {
          some: {
            id,
          },
        },
      },
    });
  }

  static async getTweets({ authorId }) {
    return prisma.tweet.findMany({
      where: {
        authorId,
      },
    });
  }

  static async getComments({ authorId }) {
    return prisma.comment.findMany({
      where: {
        authorId,
      },
    });
  }
}
