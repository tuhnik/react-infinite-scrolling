import React, { Component } from 'react';

class Posts extends Component {
  
state={subreddit: null, after: null, data: null, error: null, scrolling: false}
getPosts(subreddit, after){
    fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=100&after=${after}`).then(res=>res.json())
    .then(res=>{
        this.setState({data: res.data.children, after: res.data.after})
    })
    .catch(err=>{
        this.setState({data: null, after: null, subreddit: null, error: err})
    })
}


componentWillReceiveProps (nprops){
    if(this.state.subreddit !== nprops.subreddit){
        this.setState({subreddit: nprops.subreddit, data: null, after: null}, ()=>{
            this.getPosts(this.state.subreddit, this.state.after)
        })
    }
}
componentDidMount(){
    this.getPosts(this.props.subreddit, this.state.after)
    this.scrollListener = window.addEventListener('scroll', (e) => {
        this.handleScroll(e)
      })
}
handleScroll(e){
    if (this.state.scrolling) return
    let lastPost = document.querySelector('.posts > .post:last-child')
    var lastPostOffset = lastPost.offsetTop + lastPost.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    console.log(lastPostOffset)
}
render() {
    return (
        <div>
        {this.state.subreddit && <h1>/r/{this.state.subreddit}</h1>}   
      <div className="posts">
        {this.state.data && this.state.data.map((el, i)=>{
                return <div className="post" key={i}>{el.data.title}</div>
        })}
      </div>
    </div>
      
    );
  }
}


export default Posts;
