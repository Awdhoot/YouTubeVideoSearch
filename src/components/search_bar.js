import React, {Component} from 'react';

export default class SearchBar extends React.Component {
  test = '';
  render() {
    return (
      <input onChange={this.onInputChange}/>
    )
  }

  onInputChange(e) {
    console.log('Input changed -> ', e);
  }
}
