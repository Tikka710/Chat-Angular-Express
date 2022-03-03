import {NextFunction, Request, Response} from 'express';
import express from "express";
import userController from "./controller/userController"
import commentController from "./controller/commentController"

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userController)
app.use("/comments", commentController)



// 生存確認用API
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});


// app.get("/users", async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany();
//    res.json({ users });
// })



export default app