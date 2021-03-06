import React from 'react';
import './App.css';
import {SearchBar} from "./SearchBar/searchBar"
import {SearchResults} from "./SearchResults/searchResults";
import {Playlist} from "./Playlist/playlist";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {searchResults: [{
      name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'}, {
        name: 'name2', artist: 'artist2', album: 'album2', id: 'id2'}, {
        name: 'name3', artist: 'artist3', album: 'album3', id: 'id3'
      }, {
        name: 'name4', artist: 'artist4', album: 'album4', id: 'id4'
      }
    ],
    playlistName: 'playlist1',
    playlistTracks: [{
      name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'}, {
        name: 'name2', artist: 'artist2', album: 'album2', id: 'id2'}, {
          name: 'name3', artist: 'artist3', album: 'album3', id: 'id3'}]
  
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
  }
  addTrack(track){
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedtrack => savedtrack.id ===track.id)){
      return; 
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({playlistTracks: tracks})
  }
  updatePlaylistName(name){
    this.setState({playListName: name});
  }
  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri)
  }
  search(searchTerm){
    console.log(searchTerm);
  }
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack} isRemoval={true} onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
