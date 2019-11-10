import React, { Component } from 'react';
class Card extends Component {
  render() {
    const {el, changeGenre, genreID} = this.props
    return <div className="card">
        <div className="card-image">
        <a href={el.url}>
          <img src={el.image_url} alt={el.title} />
          </a>
        </div>
        <div className="card-text">
          <div className="title-container">
            <div className="title">
            <a href={el.url}>{el.title}</a>
            {el.volumes?<span className="volumes"> ({el.volumes}&nbsp;volumes)</span>:""}
            </div>
            {el.members && <div className="members"><span>{el.members}</span></div>}
            {el.score && <div className="score"><span>{el.score}</span></div> }      
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