import React from 'react';
import axios from 'axios';

class PostService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            age : ''
        }
    }

    submit = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`,this.state)
            .then(responce => {
                console.log(responce.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() { 
        const { name, age} = this.state;
        return (
            <>
                <input type="text" name="name" onChange={(e) => this.setState({name : e.target.value})} value={name} placeholder="Name"/>
                <input type="text" name="age" onChange={(e) => this.setState({age : e.target.value})}value={age} placeholder="Age"/>
                <button onClick = {this.submit}>Submit</button>
            </>
         );
    }
}
 
export default PostService;