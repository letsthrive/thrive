import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  section: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
  },
});

const EmptyMentorList = ({ type, classes }) => (
  <Grid item xs={12}>
    <Paper className={classes.section}>
      <Typography variant="h3" gutterBottom>Sorry :(</Typography>
      <Typography paragraph>
        We are new here and constantly trying to add mentees to our community. We have to make sure
        the mentees we are adding are kind and helpful. Folks who can actually help you up your game
        in the industry. Check us out again in a couple of days, we might have added the mentor that
        you were looking for. You can always reach out to  <a href="https://twitter.com/adeelibr" target="_blank" rel="noopener noreferrer">Adeel</a> at 
        twitter. To share your experience or give feedback. 
      </Typography>
    </Paper>
  </Grid>
);

EmptyMentorList.propTypes = {
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired, // material-ui injected
};

export default withStyles(styles)(EmptyMentorList);