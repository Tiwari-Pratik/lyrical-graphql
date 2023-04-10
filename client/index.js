import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import gql from "graphql-tag";

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

ReactDOM.render(<Root />, document.querySelector("#root"));
