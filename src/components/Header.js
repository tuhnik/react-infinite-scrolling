import React, { Component } from 'react';

class Header extends Component {
  render() {
      const {type, changeToManga, changeToAnime} = this.props
    return <>
     <h3 className="header"> 
          <p className={type === "manga"?"active":""} onClick={changeToManga}>Manga</p>
          <p className="separator"></p>
          <p className={type === "anime"?"active":""} onClick={changeToAnime}>Anime</p>
        </h3>
    </>
  }
}
export default Header;