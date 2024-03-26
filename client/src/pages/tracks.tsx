import { useQuery } from "@apollo/client";
import React from "react";
import { Layout } from "../components";
import { gql } from "../__generated__";

const TRACKS = gql(`
  query GetTracks {
  tracksForHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`);
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return "Loading";
  if (error) return `Error! ${error.message}`;
  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
