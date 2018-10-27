import React, { Component } from 'react';
import Genres from './components/Genres'
import Cards from './components/Cards'

class App extends Component {
  state = {type: "manga", genre: 1}
  submitted(id){
    this.setState({genre: id})
  }
  changeGenre(id){
    this.setState({genre: id})
  }
  changeToManga(){
    this.setState({type: "manga"})
  }
  changeToAnime(){
    this.setState({type: "anime"})
  }
  render() {
    return (
      <div className="App">
        <h3 className="header"> 
          <p className={this.state.type === "manga"?"active":""} onClick={this.changeToManga.bind(this)}>Manga</p>
          <p className="separator"></p>
          <p className={this.state.type === "anime"?"active":""} onClick={this.changeToAnime.bind(this)}>Anime</p>
        </h3>
        <Genres genre={this.state.genre} changeGenre={this.changeGenre.bind(this)}/>
        <Cards genre={this.state.genre} type={this.state.type}changeGenre={this.changeGenre.bind(this)}/>
      </div>
   
    );
  }
}
export default App;