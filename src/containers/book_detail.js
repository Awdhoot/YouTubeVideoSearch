import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetil extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div>No book selected</div>
      );
    }
    return (
      <div>
        <div>Title - {this.props.book.title}</div>
        <div>Pages - {this.props.book.pages}</div>
      </div>
    );
  }
}


function connectStateToProps(state) {
  // state refers to global app state
  return {
    book: state.activeBook
  }
}

export default connect(connectStateToProps)(BookDetil);