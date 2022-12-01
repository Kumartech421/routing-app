import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const CommonFunctional = () => {
    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
        GetPosts();
    },[])

    function GetPosts(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(responce => {
                console.log(responce.data)
                setPosts(responce.data)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return ( 
        <>
        <h1>This is Functioanl Component</h1>
        {
            posts.length ? posts.map(post => <h5 key={post.id}>{post.title}</h5>) : null
        }
        </>
     );
}
 
export default CommonFunctional;