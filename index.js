const express = require("express");
const routes = require("./routes/routes");
const chalk = require("chalk");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(chalk.bgGreen(`Server is running at PORT ${PORT}`));
});
