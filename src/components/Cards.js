import React, { Component } from 'react';
import Card from './Card'
import Loading from './Loading'

class Cards extends Component {
state={genre: 1, page: 1, totalpages: 1,data: [], error: null, loading: false}
getCards(genre, page){
    this.setState({loading: true})
    fetch(`https://api.jikan.moe/v3/genre/manga/${genre}/${page}`).then(res=>res.json())
    .then(res=>{
       if(res.error) throw Error(res.error)
       let page = this.state.page + 1
       let data = this.state.data
       this.setState({data: [...data, ...res.manga], loading: false, page, totalpages: Math.ceil(res.item_count/100)})
    })
    .catch(err=>{
        this.setState({data: null, genre: null, error: err, loading: false})
    })
}
removeData(id){
    let data = this.state.data
    data.splice(id, 1)
    this.setState({data})
}
componentWillReceiveProps (nprops){
    if(this.state.genre !== nprops.genre){
        this.setState({genre: nprops.genre, data: [], error: null, page: 1}, ()=>{
            this.getCards(nprops.genre, 1)
        })
    }
}
componentDidMount(){
    this.getCards(this.props.genre, this.state.page)
    this.scrollListener = window.addEventListener('scroll', (e) => {
        this.handleScroll(e)
      })
}
handleScroll(e){
    if (this.state.loading) return
    let lastPost = document.querySelector('.cards > .card:last-child')
    var lastPostOffset = lastPost.offsetTop + lastPost.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastPostOffset - bottomOffset) {
        if(this.state.page < this.state.totalpages){
            this.getCards(this.state.genre, this.state.page)
        }
    }
}
render() {
    return (
     <>
      <div className="cards">
        {this.state.data && this.state.data.map((el, i)=>{
                return <Card key={i} id={i} changeGenre= {this.props.changeGenre} removeData={this.removeData.bind(this)} el={el}/>
        })}
      </div>
      {this.state.loading && <Loading className="loading" msg="fetching"/>}
      {this.state.error && <div className="error">{"Error: " + this.state.error.message}</div>}
      </>
    );
  }
}
export default Cards;