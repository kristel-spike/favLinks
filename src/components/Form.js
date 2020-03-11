import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /* TODO - set initial state for link name and URL */
        this.state = {
            name: "",
            URL: ""
        }

        this.updateNameLabel= this.updateNameLabel.bind(this)
    }

   /*  handleChange = event => {
        /*TODO - Logic for changing state based on form changes

    } */

    updateNameLabel = (event) => {
        this.setState({
            name: event.target.value,
           // URL: event.target.value
        })
    }

    updateUrlLabel = (event) => {
        this.setState({
            URL: event.target.value
        })
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(this.state.name)
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
        this.props.handleSubmit(this.state)
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label for="name"> Name</label>
                <input 
                    type="" 
                    value={this.state.name}
                    onChange={this.updateNameLabel}
                />
                <label for="link"> URL</label>
                <input 
                    type="" 
                    value={this.state.URL}
                    onChange={this.updateUrlLabel}
                />

                <br></br>
                <br></br>

                 <button type="submit"> Submit </button>

                
            </form>
        )
    
    }
}

export default Form;
