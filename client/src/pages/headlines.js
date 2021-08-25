import React from "react";
import { useQuery, gql } from "@apollo/client";
import HeadLineCard from "../containers/headline-card";
import { Layout, QueryResult } from "../components";

/** TRACKS gql query to retreive all tracks */
export const HEADLINES = gql`
  query getTopHeadLines {
    topHeadLines {
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
      source {
        name
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const HeadLines = () => {
  const { loading, error, data } = useQuery(HEADLINES);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.topHeadLines?.map((headline, index) => (
          <HeadLineCard key={index} headline={headline} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default HeadLines;
