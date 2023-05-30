require("dotenv").config();
const express = require("express");

PORT = process.env.PORT || 5003;
PORTWS = process.env.PORTWS || 5001;

const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");
const stationRouter = require("./router/stationRouter");
const userRouter = require("./router/userRouter");
const app = express();
const cors = require("cors");
const http = require("http");

// const wss = new WebSocket.Server({ server });
const server = http.createServer(app);
const { wss } = require("./webSocket");

// const Dao = process.env.MONGODB_URL;

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/station", stationRouter);
app.get("/api/get", (req, res) => {
  res.json({ andrej: "Krychfalushij" });
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    server.on("upgrade", (request, socket, head) => {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    });

    server.listen(PORTWS, () => {
      console.log(`WebSocket server started on port ${PORTWS}`);
    });
    app.listen(PORT, () => {
      console.log(`Server started on port : ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
