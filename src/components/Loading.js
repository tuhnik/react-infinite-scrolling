import React, { Component } from "react";

class Loading extends Component {
  state = { dots: "" };
  componentDidMount() {
    this.interval = setInterval(() => {
        let dots = this.state.dots
        if(dots.length<3){
            this.setState({dots: dots+"."})
        }
        else{
            this.setState({dots: ""})
        }
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
}

  render() {
    return (
      <div className={this.props.className}>
         <div> {this.props.msg + this.state.dots}</div> 
      </div>
    );
  }
}

export default Loading;
