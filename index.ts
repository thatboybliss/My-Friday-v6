
import express from "express";
import bodyParser from "body-parser";
import { voicePipeline } from "../../packages/voice/voiceRouter";

const app = express();
app.use(bodyParser.json());

app.post("/voice", async (req, res) => {
  const data = await voicePipeline(req.body);
  res.json(data);
});

app.get("/", (_, res) => res.send("API running"));

app.listen(process.env.PORT || 3000);
