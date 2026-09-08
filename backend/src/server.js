import "dotenv/config"

import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import farmRouter from "./routes/farm.routes.js";
import fieldRouter from "./routes/field.routes.js";
import cropRouter from "./routes/crop.routes.js";


const app = express();

const PORT = 8888;

connectDB();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/farm",farmRouter);
app.use("/api/farm",fieldRouter);
app.use("/api/farm",cropRouter);

app.get("/", (req, res) => {
    console.log("GET / received");

    res.json({
        message : "FarmOS API is Running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is Up and Running at ${PORT}`);
});

