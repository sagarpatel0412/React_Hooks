import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post:{},
    error:''
}
const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:action.payload,
                error:''
            }
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                post:{},
                error:'Something Went Wrong!!!!!!'
            }
        default:
            return state    
    }
}


function UseReducerDataFetchingOne() {
    const [state, dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type:'FETCH_SUCCESS',payload:response.data})
            })
            .catch(error =>{
                console.log(error);
                dispatch({type:'FETCH_ERROR'})
            })
    },[])
    return (
        <div>
            <hr/>
            <p>example use of useReducer for fetching</p>
            {state.loading ? 'Loading' :state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export default UseReducerDataFetchingOne;
