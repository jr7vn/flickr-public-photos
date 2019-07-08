import React from 'react';
import PropTypes from 'prop-types';
import Photo from './../Photo';

class ListPhotos extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="row">
        {items.map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className="col-lg-3 d-flex grid-margin stretch-card"
            >
              <Photo details={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

ListPhotos.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListPhotos;
