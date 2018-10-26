import React, { Component } from 'react';
import Genres from './components/Genres'
import Cards from './components/Cards'
import Input from './components/Input'
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
        {/* <Input callback={this.submitted.bind(this)}/> */}
        <h3 className="header">🍙 Manga toplist</h3>
        <Genres genre={this.state.genre} changeGenre={this.changeGenre.bind(this)}/>
        <Cards genre={this.state.genre} changeGenre={this.changeGenre.bind(this)}/>
      </div>
   
    );
  }
}
export default App;