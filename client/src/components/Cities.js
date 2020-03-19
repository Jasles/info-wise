import React, { Component } from 'react'
import Events from './Events.js'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Cities extends Component {
    state = {
        cities: [],
     }
     getCity = () => {
        axios.get(`/api/city/${this.props.match.params.stateId}`).then((response) => {
            const foundCity = response.data;
            this.setState({
                cities: foundCity,
            });
        });
    }

     componentDidMount() {
        this.getCity();
     }

     render() {


         return (
             <div>
             {
                 this.state.cities.map((city, i) => {
                     return (
                         <div key={ i } className=" Container-2">
                      
                             <Link to={`/events/${city.name}`}>{ city.name } </Link>

                         </div>
                          
                        
                     )
                 })
             }
             <div>
                    <button onClick={ this.toggleCreateForm }>Add a New Event</button>
            </div>
             </div>
         )
     }
 }