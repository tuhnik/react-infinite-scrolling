import React, { Component } from 'react';
import genremap from '../utils/genremap'
class Genres extends Component {
  render() {
    const {changeGenre, genre} = this.props
    return <div className="all-genres">
    {genremap.map((el, i)=>{
        return <p key = {i} onClick={()=>changeGenre(Object.values(el)[0])} className={Object.values(el)[0] === genre?"genre active":"genre"}>{Object.getOwnPropertyNames(el)[0]}</p>
    })}
    </div>
  }
}
export default Genres;




