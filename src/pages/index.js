import React from 'react';
import { navigate } from "gatsby"
// material-ui
import { withStyles } from '@material-ui/core/styles';
// components
import Layout from '../components/layout/Layout';
import SEO from '../components/Seo';
import SearchForm from '../components/SearchForm';
// constants
import mentorTypes from '../constants/mentor-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
  },
});

class IndexPage extends React.Component {
  onHandleChangeMenteeType = ({ target }) => {
    const { value } = target;
    if (value === '') {
      return;
    }
    navigate(`/mentors?type=${value}`)
  };
  render() {
    const { classes } = this.props;
    return (
      <Layout>
        <SEO title="Home" keywords={[`thrive`, `mentee`, `find tech mentor`]} />
        <SearchForm mentors={mentorTypes} onChange={this.onHandleChangeMenteeType} />
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
        </Grid>
      </Layout>
    );
  }
}

export default withStyles(styles)(IndexPage);
