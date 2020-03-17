import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'; 

export default class HomePage extends Component {
    state = {
       states: [],
    }
    getState = () => {
        axios.get('/api/state').then((response) => {
            const foundState = response.data;
            this.setState({
                states: foundState,
            });
        });
    }
    componentDidMount() {
        this.getState();
    }

    
    
    render() {

        return (
            <div>
            {
                this.state.states.map((state, i) => {
                    return (
                        <div key={ i } className=" Container-1">
                            
                            <Link to={`/${state._id}`}>{ state.name }</Link>
                        </div>
                            
                    )
                })
            }
            </div>
        )
    }
}
