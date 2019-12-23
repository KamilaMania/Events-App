const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./user/router");
const loginRouter = require("./auth/router");
const app = express();
const corsMiddleware = cors();
const bodyParserMiddleware = bodyParser.json();
const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.use(userRouter);
app.use(loginRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
