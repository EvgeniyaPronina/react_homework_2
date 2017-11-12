import React, { Component } from 'react';
import NewsPost from './NewsPost';

let id = 0;

function setId() {
  id += 1;
  return id;
}

class App extends Component {
  state = { news: [], newsInput: '' };

  handleChange = e => {
    const newValue = e.target.value;
    this.setState({ newsInput: newValue });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const { news, newsInput } = this.state;
      const addNews = { text: newsInput, id: setId() };

      this.setState({ newsInput: '', news: [...news, addNews] });
    }
  };

  render() {
    const { news, newsInput } = this.state;
    return (
      <div className="App">
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={newsInput}
        />
        <div className="news-cont">
          {news.map(newsOne => (
            <NewsPost text={newsOne.text} key={newsOne.id} id={newsOne.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
