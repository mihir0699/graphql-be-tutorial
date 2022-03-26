const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const axios = require("axios");

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    Title: { type: GraphQLString },
    Year: { type: GraphQLString },
    Released: { type: GraphQLString },
    Genre: { type: GraphQLString },
    Director: { type: GraphQLString },
    Actors: { type: GraphQLString },
    Plot: { type: GraphQLString },
    Poster: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: { title: { type: GraphQLString } },
      resolve(parent, args) {
        return axios
          .get(`https://www.omdbapi.com/?t=${args.title}&apikey=c4dc7044`)
          .then((res) => res.data);
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
});
