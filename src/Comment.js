import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;
    return (
      <div className="Comment">
        <p>{text}</p>
        <span onClick={this.handleDelete} className="delete">
          X
        </span>
      </div>
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func
};

export default Comment;
