import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import coffeeRouter from "./routers/coffee.router.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173", "127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization, x-access-token"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello Nodemon 555");
});

app.use("/coffee", coffeeRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});