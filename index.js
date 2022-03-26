const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: require("./schemas"),
    graphiql: true,
  })
);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});
