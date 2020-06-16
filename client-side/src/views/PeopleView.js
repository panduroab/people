import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@material-ui/core';

class PeopleView extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: makeStyles({
        table: {
          minWidth: 650,
        },
      })
    }
  }

  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    const { people } = this.props.peopleView;
    return (
      <TableContainer component={Paper}>
        <Table className={this.state.classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Job Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((row) => (
              <TableRow key={row.display_name}>
                <TableCell>{row.display_name}</TableCell>
                <TableCell>{row.email_address}</TableCell>
                <TableCell>{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default PeopleView;