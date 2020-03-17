import React, { Component } from 'react'
import axios from 'axios';
import Cities from './Cities'
import { Link } from'react-router-dom';


export default class events extends Component {
   state= {
         events:[],
        }


submitUpdateForm = (event) => {
    event.preventDefault();
    const eventId = this.props.match.params.eventId;
    axios.put('/api/event/' + eventId, this.state.event).then(() => {
        this.getEvent();
    });
}
getEvent = () => {
    axios.get(`/api/event/${this.props.match.params.cityId}`).then((response) => {
        const foundEvent = response.data;
        this.setState({
            events: foundEvent,
        });
    });
}

componentDidMount() {
    this.getEvent();
 }

    render() {

        return (
            <div>
             {
                 this.state.events.map((event, i) => {
                     return (
                         <div key={ i } className=" Container-3">
                        <Link to={ event._id }>{ event.name } </Link>
                         </div>
                                
                     )
                 })
             }
                   <div>
                         
          
                         <form onSubmit={ this.submitUpdateForm }>
                             <input type="text" name="name" value={ this.state.editCreature.name }
                                 onChange={ this.changeInput }/>
                             
                             <input type="submit" value="Update"/>
                         </form>
         
                         <button onClick={ this.clickDelete }>Delete creature</button>
                     </div>  
             </div>
        )
    }
}
