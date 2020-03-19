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
                 <h1>WeatherWISE</h1>
            <h2>Share real-time weather events and their exact location here!</h2>
             {
                 this.state.cities.map((city, i) => {
                     return (
                         <div key={ i } className=" Container-1">
                      
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