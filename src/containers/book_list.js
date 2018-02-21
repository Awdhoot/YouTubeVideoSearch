import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; // makes sure that the action returned by action creator flows through all the reducers triggering state change


class BooksList extends Component {
  renderList() {
    console.log();
    return this.props.books.map((book) => <li
      onClick={() => this.props.selectBook(book)}
      key={book.title}
      className="list-group-item">{book.title}</li>)
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

// anything returned from this function will end up as props to book list container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed in all of the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promite bookList from a component to a container,
// it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);