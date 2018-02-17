import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            term: "",
            dataLoc: [],
            dataName: []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    handleUpdateLoc = (value) => {
        this.setState({
          dataLoc: [
            'Bangkok','Japan','London','Hamburg'
          ],
        });
        console.log(this.state.dataLoc);
      };

      handleUpdateInput = (value) => {
        this.setState({
          dataName: [
            'Bangkok','Japan','London','Hamburg'
          ],
        });
        console.log(this.state.dataName)
      };

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        // event.preventDefault();
        // pass location
    }

    render() {
      return(
        <MuiThemeProvider>

            <form onSubmit = {this.onFormSubmit} className = "input-group">
                <AutoComplete
                  placeholder = "Enter a location."
                  className = "location"
                  value = {this.state.term}
                  onChange = {this.onInputChange}
                  dataSource={this.state.dataLoc}
                  onUpdateInput={this.handleUpdateLoc}
                  style={{marginRight:'20px'}}
                />
                {/* <AutoComplete
                    placeholder = "Enter a "
                    className = "date"
                    dataSource={this.state.dataName}
                    onUpdateInput={this.handleUpdateName}
                    style={{marginRight:'20px'}}
                /> */}
            </form>
        </MuiThemeProvider>
      );

    }
}
