import express from "express";
import { pathToFileURL } from "url";
import collegeRouter from "./routes/college.js";

const unit8Server = express();
const PORT = process.env.PORT || 3000;

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

const startUnit8Server = (port = PORT) => unit8Server.listen(port);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startUnit8Server();
}

export { startUnit8Server, unit8Server };
