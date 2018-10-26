import React, { Component } from 'react';
import Card from './Card'
import Loading from './Loading'
class Posts extends Component {
  
state={genre: 1, page: 1, data: [], error: null, loading: false}
getPosts(genre, page){

    
    this.setState({loading: true})

    fetch(`https://api.jikan.moe/v3/genre/manga/${genre}/${page}`).then(res=>res.json())
    .then(res=>{    
       let page = this.state.page + 1
       let data = this.state.data
       this.setState({data: [...data, ...res.manga], loading: false, page})
    })
    .catch(err=>{
        // this.setState({data: null, after: null, subreddit: null, error: err, loading: false})
    })
}


componentWillReceiveProps (nprops){
    console.log(nprops)
    if(this.state.genre !== nprops.genre){
        this.setState({genre: nprops.genre, data: [], error: null, page: 1}, ()=>{
            this.getPosts(nprops.genre, 1)
        })
    }
}
componentDidMount(){
    this.getPosts(this.props.genre, this.state.page)
    this.scrollListener = window.addEventListener('scroll', (e) => {
        this.handleScroll(e)
      })
}
handleScroll(e){
    if (this.state.loading) return
    let lastPost = document.querySelector('.posts > .card:last-child')
    var lastPostOffset = lastPost.offsetTop + lastPost.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastPostOffset - bottomOffset) {
       this.getPosts(this.state.genre, this.state.page)
    }
}
render() {
    return (
    
     <>
      <div className="posts">
        {this.state.data && this.state.data.map((el, i)=>{
                return <Card key={i} el={el}/>
        })}
      </div>
      {this.state.loading && <Loading className="loading" msg="fetching"/>}  
      </>
    );
  }
}


export default Posts;
