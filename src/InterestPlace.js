import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import style from './App.css'
import Link from 'react-router-dom/Link';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];


export default class InterestPlace extends Component{
  state = {
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: false,
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return(
      <div className="inplace">
        <MuiThemeProvider>
          <div>
            <AppBar
              style={{backgroundColor:'#8D6E63',}}
              title="Capet walk"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Link to="/"><RaisedButton label="Back" fullWidth={true} /></Link>
            <br style={{height: '20px'}}/>
            <span className="row">
              <br/> <br/> <br/>
              <div className="col">
                <div>
                  <Table
                    style={{opacity:'0.7'}}
                    fixedHeader='true'
                  >
                    <TableHeader
                      displaySelectAll={this.state.showCheckboxes}
                      adjustForCheckbox={this.state.showCheckboxes}
                      enableSelectAll={this.state.enableSelectAll}
                    >
                      <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody
                      displayRowCheckbox={this.state.showCheckboxes}
                      deselectOnClickaway={this.state.deselectOnClickaway}
                      showRowHover='true'
                      stripedRows={this.state.stripedRows}
                    >
                      {tableData.map( (row, index) => (
                        <TableRow key={index}>
                          <TableRowColumn>{index}</TableRowColumn>
                          <TableRowColumn>{row.name}</TableRowColumn>
                          <TableRowColumn>{row.status}</TableRowColumn>
                        </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  </div>
                </div>
                <div className="col" style={{height:'300px'}}>
                  For map
                </div>
              </span>
            </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
