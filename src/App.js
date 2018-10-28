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
    const {type, genre} = this.state
    return (
    <>
      <div className={type==="manga"?"bg mangabg":"bg animebg"}></div>
      <div className="App">
        <h3 className="header"> 
          <p className={type === "manga"?"active":""} onClick={this.changeToManga.bind(this)}>Manga</p>
          <p className="separator"></p>
          <p className={type === "anime"?"active":""} onClick={this.changeToAnime.bind(this)}>Anime</p>
        </h3>
        <Genres genre={genre} changeGenre={this.changeGenre.bind(this)}/>
        <Cards genre={genre} type={type}changeGenre={this.changeGenre.bind(this)}/>
      </div>
   </>
    );
  }
}
export default App;