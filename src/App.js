import React, {Component} from 'react';
import SearchBar from './component/SearchBar';
import youtube from './apis/youtube';
import VideoList from './component/VideoList';
import VideoDetails from './component/VideoDetails';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.onTermSubmit('soprano');
  }


  onTermSubmit = async (term) => {

  const response = await youtube.get('/search', {
      params:{
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render(){
    return (
      <div className="App">
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
