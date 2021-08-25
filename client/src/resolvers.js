const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    author: ({ auhorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuhor(authorId);
    },
  },
};

module.exports = resovers;
