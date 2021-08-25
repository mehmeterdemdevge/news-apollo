const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    topHeadLines: (_, __, { dataSources }) => {
      return dataSources.newsAPI.getTopHeadLines();
    },
  },

  Source: {
    name: (source) => {
      return source.name;
    },
  },
};

module.exports = resolvers;
