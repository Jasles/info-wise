import React, { Component } from 'react'
import axios from 'axios';
import { Link } from'react-router-dom';


export default class events extends Component {
   state= {
         events:[],
         showCreateForm: false,
         newEvent: {
            name: '',
    
        },
        }
changeInput = (event) => {
    const updatedNewEvent = { ...this.state.newEvent };
        updatedNewEvent[event.target.name] = event.target.value;
        this.setState({
            newEvent: updatedNewEvent,
            });
        }
    
  
getEvent = () => {
    axios.get(`/api/event/cityname/${this.props.match.params.cityName}`).then((response) => {
        const foundEvent = response.data;
        console.log(response.data)
        this.setState({
            events: foundEvent,
        });
    });
}

submitCreateForm = (event) => {
        event.preventDefault();
        axios.post('/api/event/cityname', this.state.newEvent).then(() => {
            this.toggleCreateForm();
            this.getEvent();
        });
    }

toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        console.log(newShowCreateForm)
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    


    console.log(
        this.props.match.params.cityId
    )
}

componentDidMount() {
    this.getEvent();
 }

    render() {

        return (
           
            
            
            <div>
                 <div>

                <h1>WeatherWise</h1>

                </div>
             {
                
                
                 this.state.events.map((event, i) => {
                     return (
                         <div key={ i } className=" Container-3">
                        { event.name } {event.city} {event.comment} 
                        {event.time}
                         </div>
                                
                     )
                 })
             }
             <div>
                    <button onClick={ this.toggleCreateForm }>Create New Event</button>
            </div>
                {
                    this.state.showCreateForm
                        ? <form onSubmit={ this.submitCreateForm }>
                            <input type="text" name="name" onChange={ this.changeInput }/>
                            <input type="text" name="description" onChange={ this.changeInput }/>
                            <input type="submit" value="Create"/>
                          </form>
                        : null
                }
           
           </div>
                
           
             
             
        
            
        )
    }
}
