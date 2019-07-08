import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

class Photo extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <Card>
        <Image src={details.media.m} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{details.tags}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

Photo.propTypes = {
  details: PropTypes.object
};

export default Photo;
