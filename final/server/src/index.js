const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const NewsAPI = require("./datasources/news-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new NewsAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
