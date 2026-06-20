import express from "express";
import collegeRouter from "./routes/college.js";

const unit8Server = express();
const PORT = 3000;

// Middleware
unit8Server.use(express.json());
unit8Server.use(express.urlencoded({ extended: true }));

// Routers
unit8Server.use("/college", collegeRouter);

// 404 Handler for Undefined Routes
unit8Server.use((_, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
unit8Server.use((err, _, res) => {
  console.error(err.stack); // Log the error stack trace
  res.status(500).json({ error: "Internal Server Error" });
});

unit8Server.listen(PORT);

export { unit8Server };
