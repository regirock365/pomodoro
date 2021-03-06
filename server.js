const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public")));

const port = process.env.PORT || 2530;
app.listen(port, process.env.IP, () => console.info(`Listening: ${port}`));
