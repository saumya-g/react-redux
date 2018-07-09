import React from 'react';
import Header from './header';
import Posts from './posts';
import PostForm from './postForm'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <PostForm />
                <hr />
                <Posts />
                </div>
        );
    }
}

export default App;