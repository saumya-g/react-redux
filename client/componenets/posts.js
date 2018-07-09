import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentWillMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res.data[0])
                this.setState({ posts: res.data })
            })
            .catch(error => console.log(error));
    }

    render() {
        const postItem = this.state.posts.map((item, index) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>)
        )
        return (
            <div className="postitemcontainer">
                <h1>Posts</h1>
                {postItem}
            </div>
        );
    }
}

export default Posts;