import React from 'react';
import { navigate } from "gatsby"
// material-ui
import { withStyles } from '@material-ui/core/styles';
// components
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
  },
  formControl: {
    width: '100%',
  },
});

class IndexPage extends React.Component {
  onHandleChangeMenteeType = event => {
    navigate(`/mentors?type=${event.target.value}`)
  };
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`thrive`, `mentee`, `find tech mentor`]} />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.section}>
              <Typography variant="h1" gutterBottom>About</Typography>
              <Typography variant="body1" gutterBottom>
                Thrive was created by Adeel Imran, an open initiative to help 
                grads/undergrads or people stuck in their dead end tech jobs. The purpose of
                "thrive" is to help people in giving them direction. 
              </Typography>
              <Typography variant="body1" gutterBottom>
                There is a curated curriculum/course path created for each role type whether you
                aspire to be a kickass frontend developer, solutions architect engineer to a 
                rockstar Business Analyst. There is a path for everyone to take. 
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.section}>
              <Typography variant="h1" gutterBottom>Mission</Typography>
              <Typography variant="body1" gutterBottom>
                As Albus Dumbledore, once said "Help will always be given at Hogwarts to those 
                who ask for it.". Now this isn't Hogwarts, but <strong>thrive</strong> tends to
                have the same inspirations.
              </Typography>
              <Typography variant="body1" gutterBottom>
                What Thrive aims to accomplish is as a community let's help each other out to
                become their best versions. Only then can we survive & become "world changers".
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.section}>
              <Typography component="h2" variant="h3" gutterBottom>Find A Mentor</Typography>
              <form autoComplete="off">
                <FormControl className={classes.formControl}>
                  <Select 
                    value={''} 
                    displayEmpty
                    onChange={this.onHandleChangeMenteeType} 
                    input={<Input name="menteeType" id="menteeType" />} 
                  >
                    <MenuItem value="">
                      <em>Select A Mentee Type</em>
                    </MenuItem>
                    <MenuItem value="fed">Frontend Developer</MenuItem>
                    <MenuItem value="bed">Backend Developer</MenuItem>
                    <MenuItem value="fsd">Fullstack Developer</MenuItem>
                    <MenuItem value="ba">Business Analyst</MenuItem>
                    <MenuItem value="qa">Quality Assurance</MenuItem>
                    <MenuItem value="e">Entrepreneur</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
