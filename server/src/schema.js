const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    topHeadLines: [HeadLine]
  }

  "A track is a group of Modules that teaches about a specific topic"
  type HeadLine {
    author: String
    "The track's title"
    title: String
    "The track's main Author"
    description: String
    "The track's illustration to display in track card or track page detail"
    url: String
    "The track's approximate length to complete, in minutes"
    urlToImage: String
    "The number of modules this track contains"
    publishedAt: String

    content: String

    source: Source
  }

  type Source {
    id: String
    name: String
  }
`;

module.exports = typeDefs;
