import prisma from "../prisma/client.js";

export default class Comments {
  // CREATE
  static async create({ input }) {
    const { tweetId, authorId, content } = input;
    const comment = await prisma.comment.create({
      data: {
        tweetId,
        authorId,
        content,
      },
    });
    return comment;
  }

  // READ
  static async find({ id }) {
    return prisma.comment.findUnique({
      where: {
        id,
      },
    });
  }

  static async findAll() {
    return prisma.comment.findMany();
  }

  // UDPATE
  static async update({ id, input }) {
    try {
      const comment = await prisma.comment.update({
        where: {
          id,
        },
        data: input,
      });
      return comment;
    } catch (e) {
      return null;
    }
  }

  // DELETE
  static async delete({ id }) {
    try {
      await prisma.comment.delete({
        where: {
          id,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}
