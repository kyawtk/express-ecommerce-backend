//connection to database
import { connectDb } from "./config/db.js";
//middlewares
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
//routes
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from  "./routes/categoryRoutes.js";

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";

dotenv.config();
connectDb();
const app = express();
app.use(cors({ origin: "http://localhost:5173",credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api routes

app.use("/api/v1/products" , productRoutes);
app.use('/api/v1/categories' , categoryRoutes)
//error handlers
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on" + "http://localhost:" + PORT);
});
