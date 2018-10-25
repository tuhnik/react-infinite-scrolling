import React, { Component } from 'react';
import Posts from './components/Posts'
import Input from './components/Input'

class App extends Component {
  state = {subreddit: "moms"}

  submitted(data){
    this.setState({subreddit: data})
  }

  render() {
    return (
      <div className="App">
        <Input callback={this.submitted.bind(this)}/>
        <Posts subreddit={this.state.subreddit}/>
      </div>
    );
  }
}

export default App;
