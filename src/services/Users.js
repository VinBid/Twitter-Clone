import prisma from "../prisma/client.js";

export default class Users {
  // CREATE
  static async create({ input }) {
    const { email, password, name } = input;
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return user;
  }

  // READ
  static async find({ id }) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  static async findMany({ ids }) {
    return prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  // UDPATE
  static async update({ id, input }) {
    try {
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: input,
      });
      return user;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete({ id }) {
    try {
      await prisma.user.delete({
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
  static async getLikedTweets({ id }) {
    return prisma.tweet.findMany({
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
