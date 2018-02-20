import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDwDFVyefEUmSFkf639Sc7d7W5kUKN9ob0';
const App = () => <div><SearchBar/></div>;

ReactDOM.render(<App />, document.querySelector('.container'));