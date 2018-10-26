import React, { Component } from 'react';

class Input extends Component {
 
  render() {
    const {el} = this.props
    if(el.synopsis.length > 500) {
        el.synopsis = el.synopsis.substring(0, 500) + "..."
    }
    return <div className="card">
        <div className="card-image">
          <img src={el.image_url} alt = {el.title} />
          
        </div>
        
        <div className="card-text">
          <div className="title">{el.title}</div>
          <div className="synopsis">{el.synopsis}</div>
          <div className="genres">
          {el.genres.map((genre, i)=>{
              return <p key = {i} className="genre">{genre.name}</p>
          })}
          </div>
        </div>
      </div>;
  }
}

export default Input;