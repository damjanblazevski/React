import React, { Component } from 'react';

class SongApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          id: 1,
          title: 'In Da Club',
          artistName: '50 Cent',
          duration: 180
        },
        {
          id: 2,
          title: 'Stayin Alive',
          artistName: 'Bee Gees',
          duration: 210
        },
        {
          id: 3,
          title: 'Smooth Operator',
          artistName: 'Sade',
          duration: 240
        },
        {
          id: 4,
          title: 'Stereo Love',
          artistName: 'Edward Maya',
          duration: 195
        },
        {
          id: 5,
          title: 'Return Of The Mack',
          artistName: 'Mark Morrison',
          duration: 230
        }
      ],
      playlist: []
    };
  }

  addToPlaylist = (song) => {
    this.setState((prevState) => ({
      playlist: [...prevState.playlist, song]
    }));
  }

  removeFromPlaylist = (songId) => {
    this.setState((prevState) => ({
      playlist: prevState.playlist.filter(song => song.id !== songId)
    }));
  }

  render() {
    const { songs, playlist } = this.state;

    return (
      <div style={{backgroundColor: "whitesmoke", borderRadius: 10}}>
        <div>
          <h2 style={{color: "black"}}>Songs</h2>
          {songs.map(song => (
            <div key={song.id}>
              <h3 style={{color: "navy"}}>{song.title}</h3>
              <p style={{color: "black"}}>Artist: {song.artistName}</p>
              <p style={{color: "black"}}>Duration: {song.duration} seconds</p>
              <button onClick={() => this.addToPlaylist(song)}>Add to Playlist</button>
            </div>
          ))}
        </div>
        <div>
          <h2 style={{color: "black"}}>Playlist</h2>
          {playlist.length > 0 ? (
            playlist.map(song => (
              <div key={song.id}>
                <h3>{song.title}</h3>
                <p>Artist: {song.artistName}</p>
                <p>Duration: {song.duration} seconds</p>
                <button onClick={() => this.removeFromPlaylist(song.id)}>Remove from Playlist</button>
              </div>
            ))
          ) : (
            <p style={{color: "red"}}>There are no songs in the playlist!</p>
          )}
        </div>
      </div>
    );
  }
}

export default SongApp;
