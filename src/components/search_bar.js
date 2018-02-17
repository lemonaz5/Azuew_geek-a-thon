import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { term: ""};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        // event.preventDefault();
        // pass location
    }

    render() {
      return(
        <form onSubmit = {this.onFormSubmit} className = "input-group">
            <input
                placeholder = "Enter a location."
                className = "location"
                value = {this.state.term}
                onChange = {this.onInputChange}
            />
            <input
                placeholder = "Enter a "
                className = "date"
            />
        </form>
      );

    }
}