import React, { Component } from 'react';
class Card extends Component {
  render() {
    const {el, changeGenre, genreID} = this.props
    return <div className="card">
        <div className="card-image">
          <img src={el.image_url} alt={el.title} />
        </div>
        <div className="card-text">
          <div className="title-container">
            {" "}
            <div className="title">{el.title}</div>
            {el.members && <div className="members">{el.members}</div>}
            {el.score && <div className="score">{el.score}</div> }      
          </div>
          <div className="synopsis">{el.synopsis}</div>
          <div className="genres">
            {el.genres.map((genre, i) => {
              return <p key={i} onClick={() => changeGenre(genre.mal_id)} className={genre.mal_id === genreID ? "genre active" : "genre"}>
                  {genre.name}
                </p>;
            })}
          </div>
        </div>
      </div>;
  }
}
export default Card;