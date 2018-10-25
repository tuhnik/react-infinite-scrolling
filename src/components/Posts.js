import React, { Component } from 'react';

class Posts extends Component {
  
state={subreddit: null, after: null, data: [], error: null, scrolling: false}
getPosts(subreddit, after){

    
    this.setState({scrolling: true})
    fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=100&after=${after}`).then(res=>res.json())
    .then(res=>{
        let data;
        if(!after){
            data = []
        }
        else {
            data = this.state.data
        }
        
        this.setState({data: [...data, ...res.data.children], subreddit: res.data.children[0].data.subreddit, after: res.data.after, scrolling: false})
    })
    .catch(err=>{
        this.setState({data: null, after: null, subreddit: null, error: err, scrolling: false})
    })
}


componentWillReceiveProps (nprops){
    if(this.state.subreddit !== nprops.subreddit){
        this.setState({subreddit: nprops.subreddit, data: null, after: null, error: null}, ()=>{
            console.log("new props arrived! after: " + this.state.after)
            this.getPosts(this.state.subreddit, null)
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
    if (!this.state.after) return
    let lastPost = document.querySelector('.posts > .post:last-child')
    var lastPostOffset = lastPost.offsetTop + lastPost.clientHeight
    var pageOffset = window.pageYOffset + window.innerHeight
    var bottomOffset = 20
    if (pageOffset > lastPostOffset - bottomOffset) {
       this.getPosts(this.state.subreddit, this.state.after)
    }
}
render() {
    return (
        <div>
        {this.state.error && <h1>Error: {this.state.error.message} </h1>}
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
