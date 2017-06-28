import React from 'react';
import {gql} from 'react-apollo';
import {propType} from 'graphql-anywhere';
import {Link} from 'react-router-dom';

const TalkOverview = ({
  talk: {
    id,
    description,
    room,
    startsAt,
    title
  }
}) => <Link to={`/talk/${id}`}>
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{title}</p>
        </div>
      </div>
      <div className="content">
        {
          description.slice(0, 150)
        }

        {
          description.length > 150 ? '...' : ''
        }
        <hr/>
        <div className="columns">
          <div className="column is-6">
            <small>{room}</small>
          </div>
          <div className="column is-6">
            <small>{startsAt && new Date(startsAt).toDateString()}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</Link>;

//TODO define talk overview fragment
TalkOverview.fragments = {
  talk: gql`
      fragment TalkOverview on Talk {
          id
          title
          room
          startsAt
          description
      }
  `
};

/*Use the propType util to defined what fragment should be required here */
TalkOverview.propTypes = {
  talk: propType(TalkOverview.fragments.talk).required
};

export default TalkOverview;