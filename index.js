const express = require("express");
const cors = require("cors");
const { todoRouter } = require("./src/routers");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "100kb" }));

app.use("/api/v1/todos", todoRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
