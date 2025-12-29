const express = require("express");
const app = express();

app.use(express.json());

app.use("/meal", require("./routes/meal"));
app.use("/assistant", require("./routes/assistant"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
