const gql = require("graphql-tag");

const typeDefs = gql`
  "Query to get an array of tracks for the homepage grid"
  type Query {
    tracksForHome: [Track!]!
  }

  "A track is a group of modules that teaches a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
