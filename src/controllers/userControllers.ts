import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";
const prisma = new PrismaClient();

const add: RequestHandler = async (req, res) => {
  const { login, name, firstname } = req.body;

  try {
    const result = await prisma.user.create({
      data: {
        login,
        name,
        firstname,
      },
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

const login: RequestHandler = async (req, res) => {
  const { login } = req.params;

  try {
    if (typeof login === "string") {
      const user = await prisma.user.findUnique({
        where: {
          login: login,
        },
      });

      if (user) {
        res.json({
          exists: true,
          userId: user.id,
        });
      } else {
        res.json({
          exists: false,
        });
      }
    } else {
      res.json({
        exists: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue" });
  }
};

const all: RequestHandler = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

const one: RequestHandler = async (req, res) => {
  const { userId } = req.params;

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  });
  console.log("RES:", user);
  res.json(user);
};

export { add, login, all, one };
