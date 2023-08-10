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
  const { loginform } = req.params;
  try {
    if (!loginform) {
      return res.status(400).json({ error: "Login not provided" });
    }

    const result = await prisma.user.findUnique({
      where: {
        login: loginform,
      },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "User unknown" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while searching the user.",
    });
  }
};

export { add, login };
