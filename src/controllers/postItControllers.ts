import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";
const prisma = new PrismaClient();

const add: RequestHandler = async (req, res) => {
  const { createdAt, content, authorId, destId } = req.body;

  try {
    const result = await prisma.postIt.create({
      data: {
        content,
        authorId,
        destId,
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the post it." });
  }
};

const trash: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prisma.postIt.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the post it." });
  }
};

const view: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prisma.postIt.findMany({
      where: {
        destId: Number(id),
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while find post it." });
  }
};

export { add, trash, view };
