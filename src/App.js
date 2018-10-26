import React, { Component } from 'react';
import Genres from './components/Genres'
import Cards from './components/Cards'

class App extends Component {
  state = {genre: 1}
  submitted(id){
    this.setState({genre: id})
  }
  changeGenre(id){
    this.setState({genre: id})
  }
  render() {
    return (
  
      <div className="App">
        <h3 className="header"> <span role="img" aria-label="riceball">🍙</span> Manga toplist</h3>
        <Genres genre={this.state.genre} changeGenre={this.changeGenre.bind(this)}/>
        <Cards genre={this.state.genre} changeGenre={this.changeGenre.bind(this)}/>
      </div>
   
    );
  }
}
export default App;