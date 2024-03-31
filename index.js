import express from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.static("assets"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
