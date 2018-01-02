import React from 'react';

export default class LinksListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
      </div>
    );
  }
};

LinksListitem.propTypes = {
  _id: React.propTypes.string.isRequired,
  url: React.propTypes.string.isRequired,
  userId: React.propTypes.string.isRequired,
  shotUrl: React.propTypes.string.isRequired
};