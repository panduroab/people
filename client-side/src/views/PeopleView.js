import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Container, Grid, Button
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

  handleFetchCountRequest = () => {
    this.props.fetchCountEmailChar();
  }

  handleFetchPossibleDuplicatedRequest = () => {
    this.props.fetchPossibleDuplicated();
  }

  render() {
    const { people, countEmailsChars, possibleDuplicated } = this.props.peopleView;
    return (
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFetchPossibleDuplicatedRequest}>
              Get Possible Duplicated Emails
              </Button>
            <TableContainer component={Paper}>
              <Table className={this.state.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Email 1</TableCell>
                    <TableCell>Email 2</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {possibleDuplicated.map((row, i) => (
                    <TableRow key={i}>
                      {row.map((value, k) =>
                        <TableCell key={k}>{value}</TableCell>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFetchCountRequest}>
              Get Emails Characters Count
              </Button>
            <TableContainer component={Paper}>
              <Table className={this.state.classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Character</TableCell>
                    <TableCell>Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countEmailsChars.map((row, i) => (
                    Object.entries(row).map(([key, value]) =>
                      <TableRow key={i}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>)
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default PeopleView;