import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImpotant = this.onImpotant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImpotant() {
    this.setState(({ important }) => ({
      important: !important,
    }));
  }

  onLike() {
    this.setState(({ like }) => ({
      like: !like,
    }));
  }

  render() {
    const { label } = this.props;
    const { important, like } = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';
    important ? (classNames += ' important') : void 0;
    like ? (classNames += ' like') : void 0;

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImpotant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
