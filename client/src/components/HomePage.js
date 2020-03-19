import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'; 

export default class HomePage extends Component {
    state = {
       states: [],
       showCreateForm: false,
       newEvent: {
          name: '',
  
      },
      }
    
getState = () => {
        axios.get('/api/state').then((response) => {
            const foundState = response.data;
            console.log(foundState)
            this.setState({
                states: foundState,
            });
        });
}

changeInput = (event) => {
        const updatedNewState = { ...this.state.newState };
            updatedNewState[event.target.name] = event.target.value;
            this.setState({
                newState: updatedNewState,
                });
            }
submitCreateForm = (event) => {
        event.preventDefault();
        axios.post('/api/state', this.state.newState).then(() => {
            this.toggleCreateForm();
            this.getState();
        });
    }

toggleCreateForm = () => {
        const newShowCreateForm = !this.state.showCreateForm;
        console.log(newShowCreateForm)
        this.setState({
            showCreateForm: newShowCreateForm,
        });
    
    }


    componentDidMount() {
        this.getState();
    }

    
    
    render() {

        return (
            <div>

            <h1>WeatherWise</h1>
            <h2>Share real-time weather events and their exact location here!</h2>
            <div>
            {
               
                
                 this.state.states.map((state, i) => {
                    return (
                        <div key={ i } className=" Container-1">
                            
                            <Link to={`/cities/${state._id}`}>{ state.name }</Link>
                        </div>
                        
                            )
                 })
                 
                
            }
               <div>
                    <button className=" Button" onClick={ this.toggleCreateForm }>Create New State</button>
            </div>
                {
                    this.state.showCreateForm
                        ? <form onSubmit={ this.submitCreateForm }>
                            <input className=" input"input type="text" name="name" onChange={ this.changeInput }/>
                            <input className=" button-2" type="submit" value="Create"/>
                          </form>
                        : null
                }
            </div>
            </div>
        )
       
    }
}
