import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
           title:'',
           body:'',
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
     this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

       
        
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: this.state.title,
            body: this.state.body
        })
        .then(res =>console.log(res.data))
        .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="postformcontainer">
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea name="body"  onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;