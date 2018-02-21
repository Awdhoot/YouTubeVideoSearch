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
        Book Detail {this.props.book.title}
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