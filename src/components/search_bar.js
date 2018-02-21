import React, {Component} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  handleKeyUp(e) {
    // // e.persist(); // remove this after debugging
    // // console.log('event -> ', e);
  }

  render() {
    return (
      <div>
        <input
          placeholder="search"
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          onKeyUp={(e) => e.keyCode === 13 ? this.props.onSearchComplete(this.state.term) :  ''}/>
        {this.state.term}
      </div>
    );
  }
}
