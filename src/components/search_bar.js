import React, {Component} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({...this.state, term});
    this.props.onSearchTermChange(term);
  }


  render() {
    return (
      <div className="search-bar">
        <input
          placeholder=" search"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}/>
        {this.state.term}
      </div>
    );
  }
}
