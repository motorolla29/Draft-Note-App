import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  onUpdateSearch(evt) {
    const term = evt.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
    console.log(term);
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onUpdateSearch}
      />
    );
  }
}
