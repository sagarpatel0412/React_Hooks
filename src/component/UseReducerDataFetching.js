import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseReducerDataFetching() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error =>{
                setLoading(false)
                setPost({})
                setError('Something Went Wrong !!!!!')
            })
    },[])
    return (
        <div>
            <hr/>
            <p>example use of useReducer for fetching</p>
            {loading ? 'Loading' :post.title}
            {error ? error : null}
        </div>
    );
}

export default UseReducerDataFetching;
