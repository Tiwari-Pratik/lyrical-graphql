import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = (props) => {
  console.log(props);

  return (
    <ul className="collection">
      {props.data.loading && <p>Loading...</p>}
      {!props.data.loading &&
        props.data.songs.map((song) => (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        ))}
    </ul>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
export default graphql(query)(SongList);
