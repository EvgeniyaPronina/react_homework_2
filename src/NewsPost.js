import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

let id = 0;

function setId() {
  id += 1;
  return id;
}

class NewsPost extends Component {
  state = { comments: [], commentInput: '' };

  handleChange = e => {
    const newValue = e.target.value;
    this.setState({ commentInput: newValue });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const { comments, commentInput } = this.state;
      const addComment = { text: commentInput, id: setId() };

      this.setState({ commentInput: '', comments: [...comments, addComment] });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { text } = this.props;
    const { comments, commentInput } = this.state;

    return (
      <div>
        <p className="NewsPost__text">{text}</p>
        <label>Добавить комментарий:</label>
        <input
          className="NewsPost__comment"
          type="text"
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className="comment-cont">
          {comments.map(comment => (
            <Comment
              text={comment.text}
              key={comment.id}
              id={comment.id}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

NewsPost.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string
};

export default NewsPost;
