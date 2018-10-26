import React, { Component } from 'react';
import Posts from './components/Posts'
import Input from './components/Input'

class App extends Component {
  state = {genre: 1}

  submitted(data){
    this.setState({genre: data})
  }

  render() {
    return (
      <div className="App">
        <Input callback={this.submitted.bind(this)}/>
        <Posts genre={this.state.genre}/>
      </div>
    );
  }
}

export default App;
