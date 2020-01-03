const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./user/router");
const loginRouter = require("./auth/router");
const eventRouter = require("./events/router");
const ticketRouter = require("./tickets/router");
const commentRouter = require("./comments/router");
const app = express();
const corsMiddleware = cors();
const bodyParserMiddleware = bodyParser.json();
const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.use(userRouter);
app.use(loginRouter);
app.use(eventRouter);
app.use(ticketRouter);
app.use(commentRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
