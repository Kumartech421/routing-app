import React from 'react';
import axios from 'axios';

class CommonService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    componentDidMount(){
        this.GetPosts();
    }

    GetPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => { 
                this.setState({
                    posts : responce.data
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg : 'Getting Error'
                })
            })
    }
    render() {
        const { posts, errorMsg } = this.state;
        return ( 
            <>
                <h1>This is common service component</h1>
                {
                    posts.length ? posts.map(post => <h5 key={post.id}>{post.title}</h5>) : <h1>{errorMsg}</h1>
                }
            </>
         );
    }
}
 
export default CommonService;