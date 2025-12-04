import express from "express";

const app = express();

app.use(express.json());

// import routes
import userRoutes from "./routes/user.route.js";
// import postRoutes from "./routes/post.routes.js";

// declare routes
app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/posts", postRoutes);

// example route : http://localhost:4000/api/v1/users/register

export default app;