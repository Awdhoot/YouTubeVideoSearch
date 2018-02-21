import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyDwDFVyefEUmSFkf639Sc7d7W5kUKN9ob0';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [], selectedVideo: null};
    this.videoSearch('MKBHD');
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, (videos) => {
      this.setState({...this.state, videos, selectedVideo: videos[0]});
    });
  }


  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({...this.state, selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));