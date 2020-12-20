import React, { Component } from 'react';
import {UserConsumer} from './useContext';

class DemoOne extends Component {
    render() {
        return (
            <div><hr/>
            <p>this is example of Context API </p>
                <UserConsumer>
                    {
                        username => {
                            return <h1>hello {username}</h1>
                        }
                    }
                </UserConsumer>
            </div>
        );
    }
}

export default DemoOne;
