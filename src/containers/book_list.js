import React, {Component} from 'react';
import {connect} from 'react-redux';
class BooksList extends Component {
  renderList() {
    console.log();
    return this.props.books.map((book) => <li key={book.title} className="list-group-item">{book.title}</li>)
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // when application state changes, this BookList container will re render
  // returned data will show as props inside booklist
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BooksList);