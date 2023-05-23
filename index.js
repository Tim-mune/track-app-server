import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";

// middleware
import notFoundMiddleware from "./middleware/notFound.js";
import errorMiddleware from "./middleware/error.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import trackRoutes from "./routes/trackRoutes.js";
const app = express();
import connect from "./db/connect.js";

app.use(bodyParser.json());
// routes
app.use("/api/v1/", authRoutes);
app.use("/api/v1", trackRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
const port = 3000;
const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`app started on http://localhost:${port}`)
    );
  } catch (error) {}
};
start();
